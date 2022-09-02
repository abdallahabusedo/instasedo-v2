import React from 'react';
import {
  useRoutes,
} from "react-router-dom";

import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import WelcomePage from '../Pages/WelcomePage';
import Home from '../Pages/Home';
import Profile from "../Pages/Profile"
import CreatePost from '../Pages/CreatePost';

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
        },
        {
            path:"/profile",
            name: "Profile",
            element: <Profile />
        },
        {
            path:"/createpost",
            name: "createpost",
            element: <CreatePost />
        }
    ])
    return routes;
}

export default RouterPage;