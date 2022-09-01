
import {auth} from './../Config/firebase'
import { updateProfile, createUserWithEmailAndPassword} from 'firebase/auth'

let error = null
const signup = async (Email, Password , Username ,ProfilePic)=>{
    error = null 
    try {
        await createUserWithEmailAndPassword(auth,Email, Password)
        .then(async ()  =>{
            const user = auth.currentUser
            updateProfile(user,{
                displayName:Username,
                photoURL: ProfilePic
            })
            error = null 
            console.log("user",user);
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