import {auth} from './../Config/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

let error = null 

const login = async (Email, Password) => {
    error =null 
    try {
        const res = await signInWithEmailAndPassword(auth,Email, Password)
        error = null
        return res
    } catch (err) {
        error = err.message
    }
}

const UseLogin =()=>{
    return {error ,login}
}

export default UseLogin