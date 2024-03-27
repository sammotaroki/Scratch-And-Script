import React from 'react'
import './Infobar.css'
import { useSpring, animated } from 'react-spring'

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Infobar = () => {
    return (
        <div className='infobar'>
            <div className='statItem'>
                <div className='statPer legistlation'><Number n={71} />%</div>
                <div className='statItem_body'>
                    <p>COUNTRIES WITH </p>
                    <p><span>LEGISTLATION</span></p>
                </div>
            </div>

            <div className='statItem'>
                <div className=' statPer draft'><Number n={9} />%</div>
                <div className='statItem_body'>
                    <p>COUNTRIES WITH </p>
                    <p><span>DRAFT LEGISTLATION</span></p>
                </div>
            </div>

            <div className='statItem'>
                <div className='statPer nolegistlation'><Number n={15} />%</div>
                <div className='statItem_body'>
                    <p>COUNTRIES WITH </p>
                    <p><span>NO LEGISTLATION</span></p>
                </div>

            </div>
            <div className='statItem'>
                <div className='statPer nodata'><Number n={5} />%</div>
                <div className='statItem_body'>
                    <p>COUNTRIES WITH </p>
                    <p><span>NO DATA</span></p>
                </div>

            </div>
        </div >
    )
}

export default Infobar