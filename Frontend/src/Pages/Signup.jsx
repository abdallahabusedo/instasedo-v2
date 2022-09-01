import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import NavBarv from '../Components/NavBar/NavBarv';
import SignupForm from '../Components/Signup/SignupForm';
import GetUser from '../Composables/getUser';

function Signup(props) {
    let {user} = GetUser()
    useEffect(() => {
        if (user){
            Navigate("/home")
        }
    },[user])
    return (
        <div>
            <NavBarv />
            <SignupForm />
        </div>
    );
}

export default Signup;