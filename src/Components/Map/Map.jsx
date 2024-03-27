import React from 'react'
import './Map.css'
import img from '../../assets/map.svg'


const Map = () => {
    return (
        <div className='map'>
            <img src={img} alt='map' className='mapImg' />
        </div>
    )
}

export default Map      