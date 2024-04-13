import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Partners from '../../Components/Partners/Partners'
import Banner from '../../Components/Banner/Banner'
import './MoreAboutUs.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Slider from "react-slick";
import imgPartner5 from '../../assets/rwanda.jpeg'
import { FaSquare } from 'react-icons/fa'
import imgPartner1 from '../../assets/dpkg.jpeg'
import imgPartner2 from '../../assets/ISACAkenya.jpeg'
import imgPartner3 from '../../assets/kampala.jpeg'
import imgPartner4 from '../../assets/SA.jpeg'



const MoreAboutUs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };
    return (
        <div className='dark'>
            <Navbar />
            <div className='more'>
                <div className='more_body'>
                    <h3 className='intro'>Introduction</h3>
                    <p className="parag">The IGNITE Data Protection Map 2024 represents a collaborative effort to demystify data protection laws and empower individuals and organizations across Africa. We are pleased to present our latest update, reflecting our ongoing commitment to providing comprehensive insights into Africa data protection laws. Our aim is to make complex data privacy laws easy to understand.  Join us as we explore African laws and trends.  With the support of our partners and the dedication of learners, we are committed to fostering a culture of data protection awareness and compliance. <br /><br />Scratch and Script Limited is proud to collaborate with partners and learners across Africa, including:<br /></p>
                    <h4 className='sub_heading'>Partners</h4>
                    <p className="parag"><FaSquare className="" />       ISACA Kenya: A leading professional association for IT governance, risk management, and cybersecurity professionals in Kenya.<br /><br /><FaSquare />       ISACA Kampala Chapter: Dedicated to promoting IT governance, risk management, and cybersecurity practices in Uganda.<br /><br /><FaSquare />     ISACA Rwanda Chapter: Committed to advancing IT governance and cybersecurity knowledge in Rwanda.<br /><br /><FaSquare />       ISACA South Africa Chapter: A key organization driving IT governance and cybersecurity awareness in South Africa.<br /><br /><FaSquare />       Data Privacy and Governance Society of Kenya: An association advocating for data privacy rights and promoting best practices in data governance in Kenya
                    </p>
                    <h4 className='sub_heading'>Researchers</h4>
                    <p className="parag">In addition to our partners, we're supported by young professionals across Africa. They're researching and analyzing data protection laws, providing valuable insights. They're also actively learning about data protection, improving their understanding of regulations and best practices. Their dedication is vital in our mission to make data protection accessible to all and create a safer online world.</p>
                </div>
            </div>
            <div className='testimonials'>
                <div>
                    <h3>Our Partners</h3>
                    <p>This program is supported by: ISACA Kenya Chapter, ISACA Kampala Chapter, ISACA Rwanda Chapter, ISACA South Africa Chapter, Data Privacy and Governance Society of Kenya</p>
                </div>

                <div className="slider-container">
                    <Slider {...settings} className='slider'>
                        <div className='tcard'>
                            <img src={imgPartner5} alt='partner1' className='imgrw' />
                        </div>
                        <div className='tcard'>
                            <img src={imgPartner5} alt='partner5' className='imgrw' />
                        </div>
                        <div className='tcard'>
                            <img src={imgPartner5} alt='partner5' className='imgrw' />
                        </div>
                        <div className='tcard'>
                            <img src={imgPartner5} alt='partner5' className='imgrw' />
                        </div>
                        <div className='tcard'>
                            <img src={imgPartner5} alt='partner5' className='imgrw' />
                        </div>
                        <div className='tcard'>
                            <img src={imgPartner5} alt='partner5' className='imgrw' />
                        </div>
                        <div className='tcard'>
                            <img src={imgPartner5} alt='partner5' className='imgrw' />
                        </div>
                        <div className='tcard'>
                            <img src={imgPartner5} alt='partner5' className='imgrw' />
                        </div>
                        <div className='tcard'>
                            <img src={imgPartner5} alt='partner5' className='imgrw' />
                        </div>
                    </Slider>
                </div>
            </div>
            <Banner />
        </div>
    )
}

export default MoreAboutUs