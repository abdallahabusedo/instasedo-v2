import {auth} from './../Config/firebase'
import { signOut } from "firebase/auth";

let error = null 

const logout = async () => {
    error = null
    try {
        await signOut(auth)
        localStorage.removeItem('Lname')
        localStorage.removeItem('Genders')
        localStorage.removeItem('Email')
        localStorage.removeItem('Fname')
        localStorage.removeItem('Username')
    } catch (err) {
        error = err.message
    }
}

const UseLogout = () =>{
    return {error , logout}
}

export default UseLogout