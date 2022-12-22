import React from "react";
import Logo from "./../../Assets/Images/Posidoonb.png";
function NavBar() {
  return (
    <div>
      <nav className="w-full flex justify-evenly bg-slate-500">
        {/* Logo */}
        <img src={Logo} alt="" className="" />
        <div className="flex justify-evenly flex-1">
          {/* Home */}
          <a href="/home"> Home </a>
          {/* Signup */}
          <a href="/signup"> Signup </a>
          {/* Login */}
          <a href="/Login"> Login </a>
          {/* About me */}
          <a href="#About"> About Me </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
