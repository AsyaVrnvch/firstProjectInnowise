import { firestorage, users } from "../config/firebase";
import { currentUID } from "./AuthService";

export const loadAvatar = async (file: File) => {
    const storageRef = firestorage.ref();
    const uid = await currentUID();
    const id = new Date().valueOf().toString();
    await storageRef.child('avatarId_'+id).put(file);
    const url = await storageRef.child('avatarId_'+id).getDownloadURL();
    await users.doc(uid).update({
        "imageUrl":url
    })
    return url;

}