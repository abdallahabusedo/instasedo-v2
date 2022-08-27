import { onAuthStateChanged } from "firebase/auth";
import {auth}  from "./../Config/firebase"
const user = auth.currentUser
onAuthStateChanged(auth , _user=>{
    user = _user;
})

const GetUser = () =>{
    return user
}

export default GetUser