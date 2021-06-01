import React, { useState } from 'react'
import { SliderImages } from './SilderImages';
import './Slider.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


export const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const size = slides.length;

    const nextSlide = () => {
        setCurrent(current === size - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? size - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div className="slider-div1">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderImages.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index} id="slider-div2">
                        {index === current && (
                            <div id="item-div">
                                <div id="div-p">
                                    <h2 id="h-2">{slide.name}</h2>
                                    <p id="p">{slide.information}</p>

                                </div>
                                <img id="img" src={slide.photo} alt="" />
                            </div>



                        )}

                    </div>

                )
            })}
        </div>
    )
}


