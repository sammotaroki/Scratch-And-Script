import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Infobar from '../../Components/Infobar/Infobar'
import Banner from '../../Components/Banner/Banner'
import CarouselPage from '../../Components/Carousel/Carousel'
import Midsection from '../../Components/Midsection/Midsection'
import Partners from '../../Components/Partners/Partners'



const Home = () => {
    return (
        <div className='container'>
            <Navbar />
            <CarouselPage />
            <Infobar />
            <Midsection />
            <Banner />
            <Partners />
        </div>
    )
}

export default Home