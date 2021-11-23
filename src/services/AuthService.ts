import { users } from "../config/firebase";
import fb from "../config/firebase";
import { getDoc } from "firebase/firestore";

export const signOut = () => {
    return fb.auth().signOut();
};

export const signIn = async (email: string, password: string) => {
    const userData = await fb.auth().signInWithEmailAndPassword(
        email, 
        password);
    if(!userData) throw Error();
    const uid = userData.user?.uid;
    const docRef = await users.doc(uid);
    if(!docRef) throw Error();
    const snapshot = await getDoc(docRef);
    const data = await snapshot.data();
    return {
        uid,
        email,
        username:data?.username
    }
};

export const signUp = async ( 
    email: string, 
    password: string, 
    username: string ) => {
    const userData = await fb.auth().createUserWithEmailAndPassword(
        email, 
        password);
    if(!userData) throw Error();
    const uid = userData?.user?.uid;
    users.doc(uid).set({ uid, email, username }); 
}