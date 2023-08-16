import React from "react";
import sponsor from "./sponsor.module.css";
import github from "../assets/github-logo.svg";
import standOut from "../assets/stand-out-stickers-logo.png";
import frozen from "../assets/frozenYoghurt.png";
import verizon from "../assets/verizon.png";
import byui_cit from "../assets/byui-cit-dep.png";
import byui_cse from "../assets/byui-cse-dep.png";

function Sponsor() {
  return (
    <div className={sponsor.container}>
      <h2>Our Sponsors</h2>
      <div className={sponsor.items}>
        <img src={github} />
        <img src={standOut} />
        <img src={frozen} />
        <img src={verizon} />
        <img src={byui_cit} />
        <img src={byui_cse} />
      </div>
    </div>
  );
}

export default Sponsor;
