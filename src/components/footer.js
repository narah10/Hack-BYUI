import React from "react";
import footer from "./footer.module.css";
import ihack from "./assets/ihack-logo.png"

function Footer() {
  return (
    <div class={footer.background}>
      <div class={footer.backgroundContainer}>
        <div class={footer.logoSection}>
          <img src={ihack} />
        </div>
        <div>
          <h3>Contact</h3>
          <p>Instagram</p>
          <p>hackbyui-csee-cit@webmailbyui.onmicrosoft.com</p>
          <p>Address</p>
        </div>
        <div>
          <h3>Links</h3>
          <div class={footer.link}>
            <a href="#">Home</a>
            <a href="#">Agenda</a>
            <a href="#">FAQ</a>
            <a href="#">Sponsor</a>
            {/* <a href="#">Volunteer</a>
            <a href="#">Location</a> */}
          </div>
        </div>
        <div>
          <h3>Our Team</h3>
          <p>Want to meet the amazing team that made all this happen?</p>
          <button><a href="#">Learn More</a></button>
        </div>
      </div>
      <p id={footer.copyright}>
        Copyright &copy; 2023 BYUI. All rights reserved{" "}
      </p>
    </div>
  );
}

export default Footer;
