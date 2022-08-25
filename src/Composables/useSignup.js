
import {auth} from './../Config/firebase'
import { updateProfile, createUserWithEmailAndPassword} from 'firebase/auth'

let error = null
const signup = async (Email, Password , Fname, Lname, Username, Gender )=>{
    error = null 
    try {
        await createUserWithEmailAndPassword(auth,Email, Password)
        .then(() =>{
            const user = auth.currentUser
            updateProfile(user,{
                displayName:Username,
            })
            error = null
            localStorage.setItem("Email",Email)
            localStorage.setItem("Fname",Fname)
            localStorage.setItem("Lname",Lname)
            localStorage.setItem("Username",Username)
            localStorage.setItem("Genders",Gender)
            console.log(user);
        })
        .catch(err => error =err.message)
    } catch (err) {
        error = err.message
    }
}

const UseSignup = () => {
    return {error , signup}
}

export default UseSignup