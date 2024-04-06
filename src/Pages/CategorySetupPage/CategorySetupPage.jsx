import react, { Component } from 'react';
import './CategorySetupPage.css';
import CarouselPage from '../../Components/Carousel/Carousel';
import Navbar from '../../Components/Navbar/Navbar';
import { CategoryInfoForm } from '../../Forms/CategoryInfoForm/CategoryInfoForm';


class CategorySetupPage extends Component {


    render ()
        {
            return (
                <>
                    <Navbar />
                    <CarouselPage />
                    <div id="setupPage">                        
                        <CategoryInfoForm/>
                    </div>
                    
                </>
            );
                
        }
    
}

export default CategorySetupPage;