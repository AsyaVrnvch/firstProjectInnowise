import { firestorage, users, timestamp } from '../config/firebase'
import { currentUID } from './AuthService'

export const saveImage = async (image: Blob) => {
  const id = new Date().valueOf().toString()
  const storageRef = firestorage.ref()
  const result = await storageRef.child('id' + id).put(image)
  if (!result) throw Error()
  const uid = await currentUID()
  if(!uid) throw Error()
  const createdAt = timestamp()
  const url = await storageRef.child('id' + id).getDownloadURL();
  if(!url) throw Error()
  const usernameSnap = await users.doc(uid).get()
  const data = await usernameSnap.data()
  if (!data) throw Error()
  const snap = await users
    .doc(uid)
    .collection('images')
    .add({ url, createdAt, username: data.username })
  if(!snap) throw Error()
  return { id: snap.id, url, createdAt, username: data.username }
}
