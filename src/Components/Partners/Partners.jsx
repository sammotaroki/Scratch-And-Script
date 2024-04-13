import React from 'react'
import './Partners.css'
import imgPartner1 from '../../assets/dpkg.jpeg'
import imgPartner2 from '../../assets/ISACAkenya.jpeg'
import imgPartner3 from '../../assets/kampala.jpeg'
import imgPartner4 from '../../assets/SA.jpeg'
import imgPartner5 from '../../assets/rwanda.jpeg'
import Slider from "react-slick";


const Partners = () => {
    return (
        <div className='partners'>
            <div className='partner_header'>
                <h2>Our Partners</h2>
                <span>This program is supported by: ISACA Kenya Chapter, ISACA Kampala Chapter, ISACA Rwanda Chapter, ISACA South Africa Chapter, Data Privacy and Governance Society of Kenya</span>
            </div>
            <div className='partner_content'>
                <div className="slide">
                    <img src={imgPartner1} alt='partner1' className='partner_img' />
                </div>
                <div className="slide">
                    <img src={imgPartner2} alt='partner2' className='large' />
                </div>
                <div className="slide">
                    <img src={imgPartner3} alt='partner3' className='partner_imgka' />
                </div>
                <div className="slide">
                    <img src={imgPartner4} alt='partner4' className='partner_imgsa' />
                </div>
                <div className="slide">
                    <img src={imgPartner5} alt='partner5' className='partner_imgrw' />
                </div>
            </div>
        </div>
    )
}

export default Partners