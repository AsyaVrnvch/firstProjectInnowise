import { firestorage, users, timestamp } from "../config/firebase";
import { currentUID } from "./AuthService";

export const saveImage = async (image: Blob) =>{ 
    const id = new Date().valueOf().toString();
    const storageRef = firestorage.ref();
    const result = await storageRef.child('id'+id).put(image);
    if(!result) throw Error();
    const uid = await currentUID();
    const createdAt = timestamp();
    const url = await storageRef.child('id'+id).getDownloadURL();
    const snap = await users.doc(uid).collection("images").add({ url, createdAt })
    return { id: snap.id, url, createdAt }
}