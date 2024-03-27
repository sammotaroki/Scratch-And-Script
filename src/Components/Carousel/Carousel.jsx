import React from 'react'
import './Carousel.css'
import gif from '../../assets/earth_gif2.gif'

function CarouselPage() {
    return (
        <div className='carousel'>
            <img className='slide1' src={gif} alt='Slide1' />
        </div>
    )
}

export default CarouselPage