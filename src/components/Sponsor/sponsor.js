import React from "react";
import sponsor from "./sponsor.module.css"
import byuilogo from "../assets/byui_logo.png"

function Sponsor() {
    return (
        <div className={sponsor.container}>
            <h2>Our Sponsors</h2>
            <div className={sponsor.items}>
                <img src={byuilogo}/>
                <img src={byuilogo}/>
                <img src={byuilogo}/>
                <img src={byuilogo}/>
                <img src={byuilogo}/>
                <img src={byuilogo}/>
            </div>
        </div>
    )
}

export default Sponsor;