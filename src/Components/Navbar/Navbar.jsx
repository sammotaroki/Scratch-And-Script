import React from 'react'
import './Navbar.css'
import { IoMdDownload } from "react-icons/io";
import logo from '../../assets/snscript.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <img src={logo} alt='' className='logo' />
            </div>

            <ul>
                <li><a href='/about'>About</a></li>
                <li><a href='/downloads'>Analysis</a></li>
            </ul>
            <div className='searchIcon'>
                <a href='/' ><IoMdDownload /></a>
            </div>
        </div>
    )
}

export default Navbar