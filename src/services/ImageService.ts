import { firestore, users } from "../config/firebase";
import { currentUID } from "./AuthService";
import { Image } from "../redux/reducers/images";

export const loadMyImages = async () => {
    const uid = await currentUID();
    const collection = await users.doc(uid).collection("images").get();
    const imgArray = [] as Array<Image>;
    collection.forEach(async (snap)=>{
        const data = await snap.data();
        imgArray.push({
            id:snap.id,
            url:data.url,
            createdAt:data.createdAt,
        } as Image)
    })
    return imgArray;
};

export const loadAllImages = async () => {
    const collection = await firestore.collectionGroup('images').get();
    const imgArray = [] as Array<Image>;
    collection.forEach(async (snap)=>{
        const data = await snap.data();
        imgArray.push({
            id:snap.id,
            url:data.url,
            createdAt:data.createdAt,
        } as Image)
    })
    return imgArray;
};