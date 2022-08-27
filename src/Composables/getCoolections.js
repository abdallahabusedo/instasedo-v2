import {db} from './../Config/firebase'
import { collection ,query ,onSnapshot } from 'firebase/firestore'

const getCollection = (collectionName) =>{
    let Doc = null
    let getColError = null
    const collectionQuery = query(collection(db, collectionName))
    const unsub = onSnapshot(collectionQuery, qSnap=>{
        let res =[]
        qSnap.forEach(doc=>{
            doc.data() && res.push({...doc.data() , id: doc.id})
        })
        Doc =res
        getColError = null
    }, err =>{
        console.log(err.message);
        Doc = null
        getColError = err.message
    })
   return{getColError,Doc}
}