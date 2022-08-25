import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import WelcomePage from '../Pages/WelcomePage';
import Home from '../Pages/Home';

function RouterPage(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WelcomePage />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterPage;