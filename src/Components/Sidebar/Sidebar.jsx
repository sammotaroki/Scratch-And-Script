import React from 'react'
import './Sidebar.css'
import { IoSearch, IoUmbrellaSharp } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { FaRectangleList } from "react-icons/fa6";
import { GiAfrica, GiSuitcase } from "react-icons/gi";
import { FaBookOpen, FaBookmark } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";
import { BiTransferAlt } from "react-icons/bi";
import { RiChatPrivateFill } from "react-icons/ri";
import { MdContacts, MdLaptopMac, MdLocalPolice, MdOutlineSecurity } from "react-icons/md";
import { Link } from 'react-router-dom';

const handleLinkClick = (e) => {
    e.preventDefault(); // prevent the default action
    e.stopPropagation(); // stop the click from bubbling

    const selectedList = e.target.closest('div');
    const selectedLink = e.target;
    const allLinks = selectedList.querySelectorAll('a');
    allLinks.forEach((link) => link.classList.remove('selected'));
    selectedLink.classList.add('selected');
};

const Sidebar = () => {
    return (
        <div className='sidenav'>
            <div className='side_item selected'>
                <GiAfrica className='icons' />
                <Link to="/" className='links'>Africa Map</Link>
            </div>
            <div className='side_item'>
                <FaBookmark className='icons' />
                <Link to="/about" className='links'>About</Link>
            </div>
            <div onClick={handleLinkClick}>
                <IoSearch className='icons' />
                <Link to="/law" className='links'>Law</Link>
            </div>
            <div>
                <FaBookOpen className='icons' />
                <Link to="/definition" className='links'>Definition</Link>
            </div>
            <div>
                <GiSuitcase className='icons' />
                <Link to="/authority" className='links'>Authority</Link>
            </div>
            <div>
                <FaRectangleList className='icons' />
                <Link to="/regulation" className='links'>Regulation</Link>
            </div>
            <div>
                <IoUmbrellaSharp className='icons' />
                <Link to="/protectionofficers" className='links'>Data Protection Officers</Link>
            </div>
            <div>
                <BsStack className='icons' />
                <Link to="/collection" className='links'>Collection & Processing</Link>
            </div>
            <div>
                <BiTransferAlt className='icons' />
                <Link to="/transfer" className='links'>Transfer</Link>
            </div>
            <div>
                <MdOutlineSecurity className='icons' />
                <Link to="/security" className='links'>Security</Link>
            </div>
            <div>
                <AiFillAlert className='icons' />
                <Link to="/breach" className='links'>Breach Notification</Link>
            </div>
            <div>
                <MdLocalPolice className='icons' />
                <Link to="/enforcement" className='links'>Enforcement</Link>
            </div>
            <div>
                <MdLaptopMac className='icons' />
                <Link to="/marketing" className='links'>Electronic Marketing</Link>
            </div>
            <div>
                <RiChatPrivateFill className='icons' />
                <Link to="/privacy" className='links'>Online Privacy</Link>
            </div>
            <div>
                <MdContacts className='icons' />
                <Link to="/contacts" className='links'>Contacts</Link>
            </div>
        </div>
    );
};

export default Sidebar