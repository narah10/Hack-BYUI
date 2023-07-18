import React from "react";
import navbar from "./navbar.module.css";
import ihack from "./assets/ihack-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={navbar.container}>
      <div className={navbar.logoContainer}>
        <img src={ihack} />
      </div>
      <div className={navbar.linksContainer}>
        <Link to="/Homepage">
          <a>Home</a>
        </Link>
        <Link to="/Categories">
          <a>Categories</a>
        </Link>

        <Link to="/FAQ">
          <a>FAQ</a>
        </Link>
        <Link to="/Gallery">
          <a>Gallery</a>
        </Link>
      </div>
      <div className={navbar.registerButtonDiv}>
        <button><Link to="https://www.eventbrite.com/e/hack-byu-i-tickets-601636108797">Pre-Register</Link></button>
      </div>
      <a id="mlh-trust-badge" style={{ display:'block', maxWidth:'100px',minWidth:'60px',position:'fixed',right:'50px',top:'0',width:'10%',zIndex:'10000' }} href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg" alt="Major League Hacking 2024 Hackathon Season" style={{width:'100%'}} /></a>

    </div>
  );
}

export default Navbar;
