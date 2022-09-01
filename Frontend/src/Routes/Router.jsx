import React from 'react';
import {
  useRoutes,
} from "react-router-dom";

import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import WelcomePage from '../Pages/WelcomePage';
import Home from '../Pages/Home';


function RouterPage(props) {

    const routes = useRoutes([
        {
            path: '/',
            name: "WelcomePage",
            element: <WelcomePage />
        },
        {
            path: "/login",
            name: "Login",
            element: <Login />
        },
        {
            path: "/signup",
            name: "Signup",
            element: <Signup />
            
        },
        {
            path: "/home",
            name: "Home",
            element: <Home />
        }
    ])
    return routes;
}

export default RouterPage;