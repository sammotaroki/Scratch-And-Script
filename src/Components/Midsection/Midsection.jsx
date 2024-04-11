import React from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'
import Map from '../Map/Map'
import Rightnav from '../Rightnav/Rightnav'
import './Midsection.css'
import ResponsiveMap from '../ResponsiveMap/ResponsiveMap.js'

const Midsection = () => {
    return (
        <div className='midsection'>
            <Sidebar />
            <ResponsiveMap />
            {/* <Rightnav /> */}
        </div>
    )
}

export default Midsection