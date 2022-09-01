import React, { useCallback } from 'react';
import LoginForm from '../Components/Login/LoginForm';
import NavBarv from '../Components/NavBar/NavBarv';



function Login(props) {
    return (
        <div>
            <NavBarv />
            <LoginForm />
        </div>
    );
}

export default Login;