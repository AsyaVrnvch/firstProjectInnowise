import { firestore, users } from "../config/firebase";
import { currentUID } from "./AuthService";
import { Image } from "../redux/reducers/images";

export const loadMyImages = async () => {
    const uid = await currentUID();
    const collection = await users.doc(uid).collection("images").orderBy('createdAt','desc').get();
    const imgArray = [] as Array<Image>;
    collection.forEach(async (snap)=>{
        const data = await snap.data();
        imgArray.push({
            id: snap.id,
            url:data.url,
            createdAt: new Date(data.createdAt.seconds*1000),
        } as Image);
    })
    return imgArray;
};

export const loadAllImages = async () => {
    const collection = await firestore.collectionGroup('images').orderBy('createdAt','desc').get();
    const imgArray = [] as Array<Image>;
    collection.forEach(async (snap)=>{
        const data = await snap.data();
        imgArray.push({
            id: snap.id,
            url: data.url,
            createdAt: new Date(data.createdAt.seconds*1000),
        } as Image)
    })
    return imgArray;
};