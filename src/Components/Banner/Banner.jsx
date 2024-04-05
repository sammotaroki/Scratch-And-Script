import React from 'react'
import './Banner.css'
import logo from '../../assets/snscript.svg'



const Banner = () => {
    return (
        <div className='banner'>
            <div className='left'>
                <img src={logo} alt='logo' className='bannerLogo' />
            </div>
            <div className='right'>
                <h3>About</h3>
                <p>Scratch and Script was developed  <span className='green'> </span> to <span className='highlight'> raise awareness about data protection </span>in Africa and motivate for policy and regulatory change that better protects the right to privacy.</p>
                <div className='lastUpdate'>
                    Last updated: <span className='period'>February 2024</span>
                </div>
            </div>
        </div>
    )
}

export default Banner