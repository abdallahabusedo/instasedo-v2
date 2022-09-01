import React from 'react';
import Logo from "./../../Assets/Images/Posidoonb.png"
import "./NavBar.css"
function NavBar(props) {
    return (
        <div className="NavBar">
            <nav className='nav'>
                {/* Logo */}
                <img src={Logo} alt="" className='Logo' />
                {/* Home */}
                <a href="/home"> Home </a>
                {/* Signup */}
                <a href="/signup"> Signup </a>
                {/* Login */}
                <a href="/Login"> Login </a>
                {/* About me */}
                <a href="#About"> About Me </a>
            </nav>
        </div>
    );
}

export default NavBar;