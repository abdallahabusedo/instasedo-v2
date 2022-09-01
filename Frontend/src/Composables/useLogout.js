import {auth} from './../Config/firebase'
import { signOut } from "firebase/auth";

let error = null 

const logout = async () => {
    error = null
    try {
        await signOut(auth)
        localStorage.removeItem('UserId')
    } catch (err) {
        error = err.message
    }
}

const UseLogout = () =>{
    return {error , logout}
}

export default UseLogout