import React from "react";
import sponsor from "./sponsor.module.css"
import github from "../assets/github-logo.svg"
import standOut from "../assets/stand-out-stickers-logo.png"
import frozen from "../assets/frozenYoghurt.png"
import verizon from "../assets/verizon.png"


function Sponsor() {
    return (
        <div className={sponsor.container}>
            <h2>Our Sponsors</h2>
            <div className={sponsor.items}>
                <img src={github}/>
                <img src={standOut}/>
                <img src={frozen}/>
                <img src={verizon}/>
            </div>
        </div>
    )
}

export default Sponsor;