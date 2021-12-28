import firebase from 'firebase/compat/app'
import 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
})

const fb = firebase
const firestore = firebase.firestore()
const firestorage = firebase.storage()

const users = firestore.collection('users')
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { fb, firestore, firestorage, users, timestamp }
