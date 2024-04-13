import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Infobar from '../../Components/Infobar/Infobar'
import Banner from '../../Components/Banner/Banner'
import CarouselPage from '../../Components/Carousel/Carousel'
import Midsection from '../../Components/Midsection/Midsection'
import Partners from '../../Components/Partners/Partners'
import MidsectionHeader from '../../Components/MidsectionHeader/MidsectionHeader'




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
            <MidsectionHeader />
            <div className='midSectDiv'>
                <Midsection />
            </div>
            <Partners />
            <div className='bannerDiv'>
                <Banner />
            </div>

        </div>
    )
}

export default Home