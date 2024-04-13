import react, { Component } from 'react';
import './CategorySetupPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import { CategoryInfoForm } from '../../Forms/CategoryInfoForm/CategoryInfoForm';
import Banner from '../../Components/Banner/Banner';
import Partners from '../../Components/Partners/Partners';


class CategorySetupPage extends Component {


    render() {
        return (
            <>
                <Navbar />
                <div className="setupPage" id="setupPage">
                    <CategoryInfoForm />
                </div>
                <Partners />
                <Banner />
            </>
        );

    }

}

export default CategorySetupPage;