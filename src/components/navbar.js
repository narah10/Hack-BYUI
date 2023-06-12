import React from "react";
import navbar from "./navbar.module.css";
import byuiLogo from "./assets/byui_logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={navbar.container}>
      <div className={navbar.logoContainer}>
        <img src={byuiLogo} />
      </div>
      <div className={navbar.linksContainer}>
        <Link to="/Homepage">
          <a>Home</a>
        </Link>
        <Link to="">
          <a>Agenda</a>
        </Link>

        <Link to="/FAQ">
          <a>FAQ</a>
        </Link>

        <a href="#">Sponsor</a>
        {/* <a href="#">Volunteer</a> */}
        {/* <Link to="/Location">
          <a>Location</a>
        </Link> */}
        {/* <Link to="/Catergories">
         <a>Categories</a>
         
        </Link> */}
      </div>
      <div className={navbar.registerButtonDiv}>
        <button><Link to="https://www.eventbrite.com/e/hack-byu-i-tickets-601636108797">Pre-Register</Link></button>
      </div>
    </div>
  );
}

export default Navbar;
