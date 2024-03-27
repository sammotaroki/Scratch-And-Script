import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './About.css'



const About = () => {
    return (
        <div>
            <Navbar />
            <div className='title'>
                <h3>About</h3>
            </div>
            <div className='about'>
                <Sidebar />
                <div className='body'>
                    <div className='card'>
                        <img className='card_img' src='https://cdn4.iconfinder.com/data/icons/people-avatar-1-3/512/821-11-512.png' />
                        <div>
                            <h4>Dave Kelly</h4>
                            <p>Algeria</p>
                        </div>

                    </div>
                    <div className='card'>
                        <img className='card_img' src='https://cdn4.iconfinder.com/data/icons/people-avatar-1-3/512/821-24-512.png' />
                        <div>
                            <h4>Nancy Holmes</h4>
                            <p>Togo</p>
                        </div>

                    </div>
                    <div className='card'>
                        <img className='card_img' src='https://cdn1.iconfinder.com/data/icons/business-avatar-circle/64/07_avatar_people_man_bald_beard_glasses_business_businessman_man_male-512.png' />
                        <div>
                            <h4>Mike Namaih</h4>
                            <p>Uganda</p>
                        </div>

                    </div>
                    <div className='card'>
                        <img className='card_img' src='https://cdn1.iconfinder.com/data/icons/business-avatar-circle/64/17_avatar_people_woman_business_businesswoman_woman_female_glasses_long_hair-512.png' />
                        <div>
                            <h4>Jane Dorothy</h4>
                            <p>Egypt</p>
                        </div>

                    </div>
                    <div className='card'>
                        <img className='card_img' src='https://cdn1.iconfinder.com/data/icons/business-avatar-circle/64/19_avatar_people_business_businesswoman_woman_female_short_hair_glasses-512.png' />
                        <div>
                            <h4>Nancy Jerico</h4>
                            <p>Mali</p>
                        </div>

                    </div>
                </div>

                <div className='body'>
                    <div className='card'>
                        <img className='card_img' src='https://cdn4.iconfinder.com/data/icons/job-avatar/512/Job_Avatar-18-512.png' />
                        <div>
                            <h4>Barbara Adison</h4>
                            <p>South Africa</p>
                        </div>

                    </div>
                    <div className='card'>
                        <img className='card_img' src='https://th.bing.com/th/id/OIP.PT45TOvOSvHa1yyZsnvAbQHaHa?w=512&h=512&rs=1&pid=ImgDetMain' />
                        <div>
                            <h4>Gafford Samuels</h4>
                            <p>Chad</p>
                        </div>

                    </div>
                    <div className='card'>
                        <img className='card_img' src='https://cdn3.iconfinder.com/data/icons/women-avatars/314/29-01-512.png' />
                        <div>
                            <h4>Wendy Bernett</h4>
                            <p>Ghana</p>
                        </div>

                    </div>
                    <div className='card'>
                        <img className='card_img' src='https://coffeehow.co/wp-content/uploads/2020/11/man-2-500x500.png' />
                        <div>
                            <h4>Ben Joseph</h4>
                            <p>Niger</p>
                        </div>

                    </div>
                    <div className='card'>
                        <img className='card_img' src='https://cdn1.iconfinder.com/data/icons/people-49/512/_rebel_woman-1024.png' />
                        <div>
                            <h4>Jade Parrish</h4>
                            <p>Botswana</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default About