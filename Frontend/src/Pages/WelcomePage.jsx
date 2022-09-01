import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import Aboutus from '../Components/WelcomeComp/Aboutus';
import Body from '../Components/WelcomeComp/Body';
import Features from '../Components/WelcomeComp/Features';

function WelcomePage(props) {
    return (
        <div>
            <NavBar />
            <Body />
            <Features />
            <Aboutus />
            <Footer />
        </div>
    );
}

export default WelcomePage;