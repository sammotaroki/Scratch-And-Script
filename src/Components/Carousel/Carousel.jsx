import React from 'react'
import './Carousel.css'
import gif from '../../assets/earth_gif2.gif'

function CarouselPage() {
    return (
        <div >
            <div className='carousel'>
                <img className='slide1' src={gif} alt='Slide1' width="100" height="100" />
            </div>
            <div className='carousel_title'>
                <h3>Africa Data Protection Map (IGNITE)</h3>
            </div>
        </div>
    )
}

export default CarouselPage