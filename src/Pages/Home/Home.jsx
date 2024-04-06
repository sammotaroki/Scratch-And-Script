import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Infobar from '../../Components/Infobar/Infobar'
import Comparator from '../../Components/Comparator/Comparator'
import Banner from '../../Components/Banner/Banner'
import CarouselPage from '../../Components/Carousel/Carousel'
import Midsection from '../../Components/Midsection/Midsection'
import Exception from '../../Exception/Exception'



const Home = () => {
    return (
        <div className='container'>
            <div className='navbarDiv'>
                <Navbar />
            </div>
            <div className='carouselDiv'>
                <CarouselPage />
            </div>
            <div className='infobarDiv'>
                <Infobar />
            </div>
            <div className='midSectDiv'>
                <Midsection />
            </div>
            <div className='bannerDiv'>
                <Banner />
            </div>          
        </div>
    )
}

export default Home