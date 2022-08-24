import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import WelcomePage from '../Pages/WelcomePage';
function RouterPage(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WelcomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterPage;