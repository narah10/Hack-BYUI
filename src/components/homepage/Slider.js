import React from 'react';
import slider from './Slider.module.css';
import leftbutton from '../assets/leftbutton.svg';
import rightbutton from '../assets/rightbutton.svg';


function Slider() {
    const slides = [1,2,3,4,5,6,7,8];
    const slideLeft = ()=>{
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 300;
    }
    const slideright = ()=>{
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 300;
    }
  return (
    <div className={slider.container}>
        <div className={slider.buttonleft}>
            <img src={leftbutton} alt='' onClick={slideLeft}/>
        </div>
        <div className={slider.slider} id='slider'>
            {
                slides.map((slide,index)=>{
                    return(
                        <div className={slider.slidecard}>
                        </div>
                    )
                })
            }
        </div>
        <div className={slider.buttonright} onClick={slideright}> 
            <img src={rightbutton} alt=''/>
        </div>       
    </div>
  )
}

export default Slider