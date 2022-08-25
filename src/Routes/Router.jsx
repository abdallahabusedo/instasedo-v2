import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import WelcomePage from '../Pages/WelcomePage';

function RouterPage(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WelcomePage />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterPage;