import React, { Suspense, useEffect, useState } from 'react'
import './Sidebar.css'
import * as ioIcons from "react-icons/io5";
import * as giIcons from "react-icons/gi";
import * as fiIcons from "react-icons/fi";
import * as faIcons from "react-icons/fa";
import * as riIcons from "react-icons/ri";
import * as biIcons from "react-icons/bi";
import * as tbIcons from "react-icons/tb";
import * as mdIcons from "react-icons/md";
import * as tiIcons from "react-icons/ti";
import { Link, useLocation } from 'react-router-dom';
import { GetCategories } from '../../services/CategoryServices';

const Sidebar = (selectedLink) => {
    const location = useLocation();
    console.log(location.pathname);
    const [categoryData, setCategories] = useState([]);

    let checkLinkActivation = (link) => {

        if (location.pathname === link) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        GetCategories(0, 100000).then((data) => setCategories(data?.content));
    }, []);
    let Icon;

    return (
        <>
            <div className='sidenav'>

                <div className={checkLinkActivation("/about") && "selectedLink"}>
                    {Icon = ioIcons["IoBookmarkOutline"]}
                    <ioIcons.IoBookmarkOutline className='icons' />
                    <Link to="/about" className='links'>About</Link>
                </div>
                <div className={checkLinkActivation("/") && "selectedLink"}>
                    {Icon = giIcons["GiAfrica"]}
                    <giIcons.GiAfrica className='icons' />
                    <Link to="/" className='links'>Africa Map</Link>
                </div>
                {categoryData && categoryData.map(function (category) {
                    Icon = tiIcons[category.icon] ? tiIcons[category.icon] : mdIcons[category.icon] ? mdIcons[category.icon] :
                        tbIcons[category.icon] ? tbIcons[category.icon] : biIcons[category.icon] ? biIcons[category.icon]
                            : riIcons[category.icon] ? riIcons[category.icon] : faIcons[category.icon] ? faIcons[category.icon] :
                                fiIcons[category.icon] ? fiIcons[category.icon] : giIcons[category.icon] ? giIcons[category.icon]
                                    : ioIcons[category.icon] ? ioIcons[category.icon] : tiIcons.TiAnchor;
                    return (
                        <div className={checkLinkActivation(`/category/${category.id}`) && "selectedLink"}>

                            <Suspense fallback={<></>}>
                                <Icon className='icons' />
                                <Link to={`/category/${category.id}`} className='links'>{category.name}</Link>
                            </Suspense>


                        </div>
                    )
                })
                }
                <div className={checkLinkActivation("/contacts") && "selectedLink"}>
                    {Icon = tiIcons["TiContacts"]}
                    <Icon className='icons' />
                    <Link to="/contacts" className='links'>Contacts</Link>
                </div>
                <div className={checkLinkActivation("/setup") && "selectedLink"}>
                    {Icon = tiIcons["TiContacts"]}
                    <Icon className='icons' />
                    <Link to="/setup" className='links'>Setups</Link>
                </div>
                <div className={checkLinkActivation("/category-setup") && "selectedLink"}>
                    {Icon = ioIcons["IoSettingsOutline"]}
                    <Icon className='icons' />
                    <Link to="/category-setup" className='links'>Category Setups</Link>
                </div>
            </div>


        </>
        // <div className='sidenav'>
        // <div>
        //     <IoBookmarkOutline className='icons' />
        //     <Link to="/about" className='links'>About</Link>
        // </div>
        // <div>
        //     <GiAfrica className='icons' />
        //     <Link to="/" className='links'>Africa Map</Link>
        // </div>
        //     <div>
        //         <IoSearch className='icons' />
        //         <Link to="/law" className='links'>Law</Link>
        //     </div>
        //     <div>
        //         <FiBook className='icons' />
        //         <Link to="/definition" className='links'>Definition</Link>
        //     </div>
        //     <div>
        //         <IoBriefcaseOutline className='icons' />
        //         <Link to="/authority" className='links'>Authority</Link>
        //     </div>
        //     <div>
        //         <FaRegListAlt className='icons' />
        //         <Link to="/regulation" className='links'>Regulation</Link>
        //     </div>
        //     <div>
        //         <IoUmbrellaOutline className='icons' />
        //         <Link to="/protectionofficers" className='links'>Data Protection Officers</Link>
        //     </div>
        //     <div>
        //         <RiStackLine className='icons' />
        //         <Link to="/collection" className='links'>Collection & Processing</Link>
        //     </div>
        //     <div>
        //         <BiTransfer className='icons' />
        //         <Link to="/transfer" className='links'>Transfer</Link>
        //     </div>
        //     <div>
        //         <IoLockOpenOutline className='icons' />
        //         <Link to="/security" className='links'>Security</Link>
        //     </div>
        //     <div>
        //         <TbAlertSquareRounded className='icons' />
        //         <Link to="/breach" className='links'>Breach Notification</Link>
        //     </div>
        //     <div>
        //         <GiPoliceBadge className='icons' />
        //         <Link to="/enforcement" className='links'>Enforcement</Link>
        //     </div>
        //     <div>
        //         <MdOutlineComputer className='icons' />
        //         <Link to="/marketing" className='links'>Electronic Marketing</Link>
        //     </div>
        //     <div>
        //         <MdOutlineRemoveRedEye className='icons' />
        //         <Link to="/privacy" className='links'>Online Privacy</Link>
        //     </div>
        // <div>
        //     <TiContacts className='icons' />
        //     <Link to="/contacts" className='links'>Contacts</Link>
        // </div>
        // <div>
        //     <TiContacts className='icons' />
        //     <Link to="/setup" className='links'>Setups</Link>
        // </div>
        // </div>
    );
};

export default Sidebar