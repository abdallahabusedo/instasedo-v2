import {db} from './../Config/firebase'
import { collection, addDoc } from "firebase/firestore"; 

const UseCollection = (collectionName)=>{
    let err = null
    
    const addDoce = async (doc)=>{
    try {
        const docRef = await addDoc(collection(db,collectionName),doc)
        console.log("added collection");
        localStorage.setItem("UserId", docRef.id)
    } catch (er) {
        err = "colud not add User"
        console.log("error: " + er);
    }
}
    return{err,addDoce}
}

export default UseCollection