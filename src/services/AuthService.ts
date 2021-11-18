import firebase from "firebase/compat/app";
import { users } from "../config/firebase";
import "firebase/compat/auth";
import { getDoc } from "firebase/firestore";

export const signOut = () => {
    return firebase.auth().signOut();
};

export const signIn = async (email: string, password: string) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
    const docSnap = await getDoc(users.doc(email))
    return {
        email,
        username: docSnap.data()?.username
    }
};

export const signUp = ( email: string, password: string, username: string ) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    users.doc(email).set({ email, username })
}