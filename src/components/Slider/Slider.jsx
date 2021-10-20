import React from 'react-dom';
import "./Slider.css";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import sliderData from '../../Data/SliderData'
import { NavLink } from 'react-router-dom';
const Slider = () => {
    return (
        <div className="slider-container py-5 my-container">
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
                {
                    sliderData.map((item) => {
                        const { id, name, img, des, btn } = item
                        return (
                            <div key={id} className="flex 
                            flex-col md:flex-row items-center justify-center">
                                <div className="w-2/5 md:w-1/3 p-5 text-left">
                                    <h2 className="text-xl md:text-4xl font-bold mb-4">{name} </h2>
                                    <p className="text-gray-500 mb-4 md:pr-20"> {des}</p>
                                    <button className="text-white bg-green-400 px-7 py-3 rounded-full font-semibold">
                                        <NavLink to="/">
                                            {btn}
                                        </NavLink>
                                    </button>
                                </div>
                                <div className="w-2/5 sm:w-1/2 md:w-2/5 p-6 md:p-10">
                                    <img className=" slider-img rounded-lg" src={img} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Slider
