
import {auth} from './../Config/firebase'
import { updateProfile, createUserWithEmailAndPassword} from 'firebase/auth'

let error = null
const signup = async (Email, Password , Username )=>{
    error = null 
    try {
        await createUserWithEmailAndPassword(auth,Email, Password)
        .then(async ()  =>{
            const user = auth.currentUser
            updateProfile(user,{
                displayName:Username,
            })
            error = null 
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