import React, { useState } from "react";
import Hamburger from "./hamburger";
import navbar from "./navbar.module.css";
import ihack from "./assets/new-ihack-logo.png";
// import ihack2024 from "./assets/ihack2024.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className={navbar.totalContainer}>
      <div className={navbar.container}>
        <div className={navbar.logoContainer}>
          <img src={ihack} />
        </div>
        <div className="navigation">
          <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger />
          </div>
          <ul>
            <li>
              <a href="/Homepage">Home</a>
            </li>
            <li>
              <a href="/Categories">Categories</a>
            </li>
            <li>
              <a href="/FAQ">FAQ</a>
            </li>
            <li>
              <a href="/Gallery">Gallery</a>
            </li>
          </ul>
        </div>
        <div className={navbar.registerButtonDiv}>
          <button>
            <Link to="https://www.eventbrite.com/e/hack-byu-i-tickets-601636108797">
              Pre-Register
            </Link>
          </button>
        </div>
        <a
          id="mlh-trust-badge"
          style={{
            display: "block",
            maxWidth: "100px",
            minWidth: "60px",
            position: "fixed",
            right: "50px",
            top: "0",
            width: "10%",
            zIndex: "10000",
          }}
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=blue"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-blue.svg"
            alt="Major League Hacking 2024 Hackathon Season"
            style={{ width: "100%" }}
          />
        </a>
      </div>
      <style jsx>
        {`
                  .navigation{
                      width: 100%;
                      align-item: right;

                  }
                  
                  .navigation ul li{
                      list-style-type: none;
                      padding: 1rem;
                  }

                  .navigation ul{
                    display: flex;
                    display: ${hamburgerOpen ? "inline" : "none"};
                    left: 0;
                    width: 105%;
                    padding-bottom: .5rem;
                    margin-left: -3rem;
                    position: fixed;
                    text-align: center;
                    background-color: #18a0fb;
                }

                  .navigation ul li a{
                    text-decoration: none;
                    margin-left: auto;
                    margin-right: auto;
                    pointer: cursor;
                    font-size: 1rem;
                    color: white;
                    font-weight: 600;
                }

                  .navigation ul li a:hover{
                    color:#18a0fb;
                }

                  .hamburger{
                    display: fixed;
                    padding-top: 7px;
                    margin: 0 auto;
                    z-index: 10;
                    
                  }

                  

                  @media (min-width: 450px){
                  .hamburger{
                    display: none;
                    
                  }

                  .navigation ul li a{
                    color: #082437;
                }

                  .navigation ul {
                    background-color: white;
                    display: flex;
                    position: static;
                  }

                  .navigation{
                    background-color: white;
                  }

                  `}
      </style>
    </div>
  );
}
