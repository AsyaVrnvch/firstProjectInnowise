import { firestorage, timestamp, users } from "../config/firebase";
import { currentUID } from "./AuthService";

export const loadImage = async (file) => {
    const storageRef = firestorage.ref(file.name);
    const uid  = await currentUID();
    // let data={};
    await storageRef.put(file).on("state_changed",(snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        console.log(percentage)
     },(err) => {
         console.log(err)
         throw Error(err.message);
     },async () => {
         const url = await storageRef.getDownloadURL();
         const createdAt = timestamp();
         const dataImage = await users.doc(uid).collection("images").add({ url, createdAt })
        console.log(dataImage)
     });
    // return data;
};