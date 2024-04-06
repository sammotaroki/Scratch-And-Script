import react, { Component } from 'react';
import './SetupPage.css';
import { CountryForm } from '../../Forms/CountryForm/CountryForm';
import { SetupForm } from '../../Forms/SetupForm/SetupForm';
import CarouselPage from '../../Components/Carousel/Carousel';
import Navbar from '../../Components/Navbar/Navbar';


class SetupPage extends Component {


    render ()
        {
            return (
                <>
                    <Navbar />
                    <CarouselPage />
                    <div id="setupPage">                        
                        <CountryForm />
                        <SetupForm />
                    </div>
                    
                </>
            );
                
        }
    
}

export default SetupPage;