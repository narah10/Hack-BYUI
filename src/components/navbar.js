import React from "react";
import navbar from "./navbar.module.css";
import byuiLogo from "./assets/byui_logo.png";

function Navbar() {
  return (
    <div className={navbar.container}>
      <div className={navbar.logoContainer}>
        <img src={byuiLogo} />
      </div>
      <div className={navbar.linksContainer}>
        <a href="#">Home</a>
        <a href="#">Agenda</a>
        <a href="#">FAQ</a>
        <a href="#">Sponsor</a>
        <a href="#">Volunteer</a>
        <a href="#">Location</a>
      </div>
      <div className={navbar.registerButtonDiv}>
        <button>Pre-Register</button>
      </div>
    </div>
  );
}

export default Navbar;
