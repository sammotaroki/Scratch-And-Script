import React from 'react'
// import { Link } from 'react-router-dom'
import './Sidebar.css'
import { IoBookmarkOutline, IoSearch, IoBriefcaseOutline, IoUmbrellaOutline, IoLockOpenOutline } from "react-icons/io5";
import { GiAfrica, GiPoliceBadge } from "react-icons/gi";
import { FiBook } from "react-icons/fi";
import { FaRegListAlt } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import { TbAlertSquareRounded } from "react-icons/tb";
import { MdOutlineComputer, MdOutlineRemoveRedEye } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidenav'>
            <div>
                <IoBookmarkOutline className='icons' />
                <Link to="/about" className='links'>About</Link>
            </div>
            <div>
                <GiAfrica className='icons' />
                <Link to="/" className='links'>Africa Map</Link>
            </div>
            <div>
                <IoSearch className='icons' />
                <Link to="/law" className='links'>Law</Link>
            </div>
            <div>
                <FiBook className='icons' />
                <Link to="/definition" className='links'>Definition</Link>
            </div>
            <div>
                <IoBriefcaseOutline className='icons' />
                <Link to="/authority" className='links'>Authority</Link>
            </div>
            <div>
                <FaRegListAlt className='icons' />
                <Link to="/regulation" className='links'>Regulation</Link>
            </div>
            <div>
                <IoUmbrellaOutline className='icons' />
                <Link to="/protectionofficers" className='links'>Data Protection Officers</Link>
            </div>
            <div>
                <RiStackLine className='icons' />
                <Link to="/collection" className='links'>Collection & Processing</Link>
            </div>
            <div>
                <BiTransfer className='icons' />
                <Link to="/transfer" className='links'>Transfer</Link>
            </div>
            <div>
                <IoLockOpenOutline className='icons' />
                <Link to="/security" className='links'>Security</Link>
            </div>
            <div>
                <TbAlertSquareRounded className='icons' />
                <Link to="/breach" className='links'>Breach Notification</Link>
            </div>
            <div>
                <GiPoliceBadge className='icons' />
                <Link to="/enforcement" className='links'>Enforcement</Link>
            </div>
            <div>
                <MdOutlineComputer className='icons' />
                <Link to="/marketing" className='links'>Electronic Marketing</Link>
            </div>
            <div>
                <MdOutlineRemoveRedEye className='icons' />
                <Link to="/privacy" className='links'>Online Privacy</Link>
            </div>
            <div>
                <TiContacts className='icons' />
                <Link to="/contacts" className='links'>Contacts</Link>
            </div>
        </div>
    );
};

export default Sidebar