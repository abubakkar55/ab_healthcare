import React from 'react'
import Slider from '../components/Slider/Slider'
import Services from '../components/Services/Services'
import Products from '../components/Products/Products'

const Home = () => {
    return (
        <div>
            <Slider />
            <Services />
            <Products/>
        </div>
    )
}

export default Home
