import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Infobar from '../../Components/Infobar/Infobar'
import Comparator from '../../Components/Comparator/Comparator'
import Banner from '../../Components/Banner/Banner'
import CarouselPage from '../../Components/Carousel/Carousel'
import Midsection from '../../Components/Midsection/Midsection'



const Home = () => {
    return (
        <div className='container'>
            <Navbar />
            <CarouselPage />
            <Infobar />
            <Midsection />
            <Banner />
        </div>
    )
}

export default Home