import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import NavBarv from '../Components/NavBar/NavBarv';
import Aboutus from '../Components/WelcomeComp/Aboutus';
import Body from '../Components/WelcomeComp/Body';
import Features from '../Components/WelcomeComp/Features';

function WelcomePage() {
    return (
        <div>
            <NavBarv />
            <Body />
            <Features />
            <Aboutus />
            <Footer />
        </div>
    );
}

export default WelcomePage;