import React from 'react'
import './Rightnav.css'
import { LiaSquareSolid } from "react-icons/lia";

const Rightnav = () => {
    return (
        <div className='rightnav'>
            <div className='key'>
                <div className='keyItems'>
                    <LiaSquareSolid className='keyIcon one' />
                    Law enacted
                </div>
                <div className='keyItems'>
                    <LiaSquareSolid className='keyIcon two' />
                    No law
                </div>
                <div className='keyItems'>
                    <LiaSquareSolid className='keyIcon three' />
                    Draft law
                </div>
            </div>
            <div className='keyData'>
                <div className='dataItem'>
                    <h3 className='heading'>Africa (54 countries)</h3>
                    <p className='itemContent'>Countries with legistlation</p>
                </div>
                <div className='dataItem'>
                    <h3 className='subHeading'>Legistlation:</h3>
                    <p className='itemContent'>33 (61%)</p>
                </div>
                <div className='dataItem'>
                    <h3 className='subHeading'>Draft Legistlation:</h3>
                    <p className='itemContent'>6 (11%)</p>
                </div>
                <div className='dataItem'>
                    <h3 className='subHeading'>No Legistaltion:</h3>
                    <p className='itemContent'>10 (19%)</p>
                </div>
                <div className='dataItem'>
                    <h3 className='subHeading'>No Data:</h3>
                    <p className='itemContent'>5 (9%)</p>
                </div>
            </div>
        </div>
    )
}

export default Rightnav