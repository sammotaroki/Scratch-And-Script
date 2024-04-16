import React from 'react'
import './Navbar.css'
import { IoMdDownload } from "react-icons/io";
import logo from '../../assets/snscript.svg'

import doc from '../../assets/example.pdf'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <img src={logo} alt='' className='logo' />
            </div>

            <ul className='navlinks'>
                <li className='navlink'><a href='/about'>About</a></li>
                <li className='navlink'><a href='/more'>IGNITE Program</a></li>
            </ul>
            <div className='searchIcon'>
                <div>
                    <a href={doc} download='doc-document' target='_blank' rel='noreferrer'>Download Full Data</a>
                </div>
                <div className="download_icon">
                    <IoMdDownload />
                </div>
            </div>
        </div>
    )
}

export default Navbar