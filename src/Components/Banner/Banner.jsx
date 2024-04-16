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
                <div className='footerContainer'>
                    <ul className='footerList'>
                        <li><a className='footerLink' href=''>Our Page</a></li>
                        <li><a className='footerLink' href=''>Become An Instructor</a></li>
                        <li><a className='footerLink' href=''>About Us</a></li>
                        <li><a className='footerLink' href=''>Contact Us</a></li>
                        <li><a className='footerLink' href=''>IGNITE Program</a></li>
                    </ul>
                </div>
                <div className='footerContainer'>
                    <ul className='footerList'>
                        <li><a href=''>Support</a></li>
                        <li><a href=''>Careers</a></li>
                        <li><a href=''>Blog</a></li>
                        <li><a href=''>Help & Support</a></li>
                    </ul>
                </div>
                <div className='footerContainer'>
                    <ul className='footerList'>
                        <li><a href=''>Others</a></li>
                        <li><a href=''>Terms and Conditions</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner