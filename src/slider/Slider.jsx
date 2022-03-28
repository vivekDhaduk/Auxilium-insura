import React from 'react'
import './Slider.css'
import dataSlider from './data.Slider'
import BtnSlider from './BtnSlider'
import { useState } from 'react'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
  return (
    <>

     <div id='home' className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `../images/slider-img${index + 1 }.jpg`} 
                        />
                        
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />

        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 4}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>

    </>
  )
}

export default Slider