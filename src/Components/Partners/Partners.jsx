import React from 'react'
import './Partners.css'
import imgPartner1 from '../../assets/dpkg.jpeg'
import imgPartner2 from '../../assets/ISACAkenya.jpeg'
import imgPartner3 from '../../assets/kampala.jpeg'
import imgPartner4 from '../../assets/SA.jpeg'
import imgPartner5 from '../../assets/rwanda.jpeg'



const Partners = () => {
    return (
        <div className='partners'>
            <div className='partner_header'>
                <h2>Our Partners</h2>
            </div>
            <div className='partner_content'>
                <img src={imgPartner1} alt='partner1' className='partner_img' />
                <img src={imgPartner2} alt='partner2' className='large' />
                <img src={imgPartner3} alt='partner3' className='partner_imgka' />
                <img src={imgPartner4} alt='partner4' className='partner_imgsa' />
                <img src={imgPartner5} alt='partner5' className='partner_imgrw' />
            </div>
        </div>
    )
}

export default Partners