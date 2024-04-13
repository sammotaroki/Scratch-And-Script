import React from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'

import './Midsection.css'
import ResponsiveMap from '../ResponsiveMap/ResponsiveMap.js'

const Midsection = () => {
    return (
        <div className='midsection'>
            <Sidebar />
            <ResponsiveMap />
        </div>
    )
}

export default Midsection