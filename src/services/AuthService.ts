import { fb, users } from '../config/firebase'
import { getDoc } from 'firebase/firestore'

export const getCurrentUser = async (uid: string) => {
  const docRef = await users.doc(uid)
  if (!docRef) throw Error()
  const snapshot = await getDoc(docRef)
  if (!snapshot) throw Error()
  const data = await snapshot.data()
  if (!data) throw Error()
  return {
    uid,
    email: data.email,
    username: data.username,
    imageUrl: data.imageUrl,
    title: data.title,
  }
}

export const currentUID = async () => {
  let uid = ''
  await fb.auth().onAuthStateChanged((user) => {
    if (user) {
      uid = user?.uid
    }
  })
  return uid
}

export const signOut = () => {
  return fb.auth().signOut()
}

export const signIn = async (email: string, password: string) => {
  const userData = await fb.auth().signInWithEmailAndPassword(email, password)
  if (!userData) throw Error()
  const uid = userData.user?.uid || ''
  const data = await getCurrentUser(uid)
  if (!data) throw Error()
  return data
}

export const signUp = async (email: string, password: string, username: string) => {
  const userData = await fb.auth().createUserWithEmailAndPassword(email, password)
  if (!userData) throw Error()
  const uid = userData.user?.uid
  const imageUrl = process.env.REACT_APP_DEFAULT_AVATAR_URL;
  users.doc(uid).set({ uid, email, username, imageUrl, title: '' })
  users.doc(uid).collection('images')
}
