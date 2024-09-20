import React from "react";
import footer from "./footer.module.css";
import ihack from "./assets/new-ihack-logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class={footer.Footerbackground}>
      <div class={footer.backgroundContainer}>
        <div class={footer.logoSection}>
          <img src={ihack} style={{ width: "40%" }} />
        </div>
        <div>
          <h3>Contact</h3>
          <Link to="https://www.instagram.com/ihack_byui/?igshid=MzRlODBiNWFlZA%3D%3D">
            <p>Instagram</p>
          </Link>
          <a href="mailto:hackathonbyui@gmail.com">Email</a>
          <Link to="https://goo.gl/maps/uERoM6fRCYwzxXqy6">
            <p>Location</p>
          </Link>
        </div>
        <div>
          <h3>Links</h3>
          <div class={footer.link}>
            <a href="/Homepage">
              <a>Home</a>
            </a>
            <a href="/Categories">
              <a>Categories</a>
            </a>

            <a href="/FAQ">
              <a>FAQ</a>
            </a>
            <a href="/Gallery">
              <a>Gallery</a>
            </a>
          </div>
        </div>
        <div>
          <h3>Our Team</h3>
          <p>Want to meet the amazing team that made all this happen?</p>
          <button>
            <a href="/Team">View Team</a>
          </button>
        </div>
      </div>
      <p id={footer.copyright}>
        Copyright &copy; 2024 BYUI. All rights reserved{" "}
      </p>
    </div>
  );
}

export default Footer;
