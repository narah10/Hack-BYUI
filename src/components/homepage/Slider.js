import React from 'react';
import slider from './Slider.module.css';


function Slider() {
    const slides = [1,2,3,4,5,6,7,8];
  return (
    <div className={slider.container}>
        <div className={slider.buttonleft}>
            left
        </div>
        <div className={slider.slider}>
            {
                slides.map((slide,index)=>{
                    return(
                        <div className={slider.slidecard}>
                        </div>
                    )
                })
            }
        </div>
        <div className={slider.buttonright}>
            right
        </div>       
    </div>
  )
}

export default Slider