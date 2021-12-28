import { firestore, users } from '../config/firebase'
import { currentUID } from './AuthService'
import { Image } from '../redux/reducers/images'

export const loadMyImages = async () => {
  const uid = await currentUID()
  if(!uid) throw Error()
  const collection = await users.doc(uid).collection('images').orderBy('createdAt', 'desc').get()
  const snapshot = await users.doc(uid).get()
  if(!snapshot) throw Error()
  const profile = await snapshot.data()
  if(!profile) throw Error()
  const username = profile.username
  const imgArray = [] as Array<Image>
  //promiseAll
  collection.forEach(async (snap) => {
    const data = await snap.data()
    if(!data) throw Error()
    imgArray.push({
      id: snap.id,
      url: data.url,
      createdAt: new Date(data.createdAt.seconds * 1000),
      username,
    } as Image)
  })
  return imgArray
}

export const loadAllImages = async () => {
  const collection = await firestore.collectionGroup('images').orderBy('createdAt', 'desc').get()
  const imgArray = [] as Array<Image>
  //promiseAll
  collection.forEach(async (snap) => {
    const data = await snap.data()
    if(!data) throw Error()
    imgArray.push({
      id: snap.id,
      url: data.url,
      createdAt: new Date(data.createdAt.seconds * 1000),
      username: data.username,
    } as Image)
  })
  return imgArray
}
