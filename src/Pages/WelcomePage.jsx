import React from 'react';
import NavBarv from '../Components/NavBar/NavBarv';
import Aboutus from '../Components/WelcomeComp/Aboutus';
import Body from '../Components/WelcomeComp/Body';
import Features from '../Components/WelcomeComp/Features';

function WelcomePage(props) {
    return (
        <div>
            <NavBarv />
            <Body />
            <Features />
            <Aboutus />
        </div>
    );
}

export default WelcomePage;