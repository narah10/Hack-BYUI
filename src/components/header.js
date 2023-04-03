import React from "react";
import logo from "./assets/hackathon_logo.png";
import header from "./header.module.css";
import byui from "./assets/logo.svg";

function Header() {
  return (
    <div className={header.bodyContainer}>
      <div className={header.container}>
        <div className={header.logoContainer}>
          <img src={byui} id={header.hackLogo} />
        </div>
        <div className={header.content}>
          <h1>Hack BYU-I</h1>
          <p>
            The Hack BYU-I is a unique opportunity to engage in a fun and
            creative experience that combines learning, networking, and
            problem-solving challenges. Participants will get to work with
            like-minded individuals, attend workshops and guest speaker events
            to learn new skills, and network with professionals and companies.
            <br />
            The hackathon offers a platform for participants to showcase their
            creativity, teamwork, and problem-solving skills while having fun
            and potentially discovering new career opportunities. Overall, the
            BYU-I Hackathon promises to be an exciting event that fosters
            collaboration, innovation, and learning in a dynamic and supportive
            environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
