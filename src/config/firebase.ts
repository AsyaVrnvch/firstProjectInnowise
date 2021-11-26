import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

firebase.initializeApp({
  apiKey: "AIzaSyCh28yppDN8wCs6CcZYRR9bH3ki-fD_TEo",
  authDomain: "first-project-innowise.firebaseapp.com",
  projectId: "first-project-innowise",
  storageBucket: "first-project-innowise.appspot.com",
  messagingSenderId: "920735638530",
  appId: "1:920735638530:web:ea47b9a16c323cb35ab31b",
  measurementId: "G-JW2Q5E4KMN"
});

const fb = firebase;
const firestore = firebase.firestore();
const firestorage = firebase.storage();

const users = firestore.collection("users");
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { fb, firestore, firestorage, users, timestamp }