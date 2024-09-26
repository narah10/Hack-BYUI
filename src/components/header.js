import React from "react";
import header from "./header.module.css";

function Header() {
  return (
    <div className={header.bodyContainer}>
      <div className={header.container}>
        <div className={header.mainHeader}>
          <h1>I-Hack</h1>
          <h2>2024</h2>
          <h3>Oct 18th - 19th</h3>
        </div>
        <div className={header.content}>
          <h2>Welcome</h2>
          <p>
            Embark on an unforgettable journey with I-Hack! Join a community of
            passionate learners, connect with experienced professionals, and
            ignite your future. Here, your skills take flight, and career
            possibilities shine bright, all within a welcoming and supportive
            space.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
