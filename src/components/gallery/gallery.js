import React from 'react';
import Navbar from '../navbar';
import Header from '../header';
import Footer from '../footer';
import gallery from "../gallery/gallery.module.css";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image6 from "./assets/image6.png";
import image7 from "./assets/image7.png";
import image8 from "./assets/image8.png";
import image9 from "./assets/image9.png";
import image10 from "./assets/image10.png";
import image11 from "./assets/image11.png";

function Gallery() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className={gallery.galleryContainer}>
                <h1>Fall 2023 Hackathon</h1>
                <div className={gallery.images}>
                    <img src={image1}/>
                    <img src={image2}/>
                    <img src={image3}/>
                    <img src={image4}/>
                    <img src={image6}/>
                    <img src={image7}/>
                    <img src={image8}/>
                    <img src={image9}/>
                    <img src={image10}/>
                    <img src={image11}/>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Gallery