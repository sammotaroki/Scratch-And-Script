import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import './MoreAboutUs.css'
import imgPartner5 from '../../assets/rwanda.jpeg'
import imgPartner1 from '../../assets/dpkg.jpeg'
import imgPartner2 from '../../assets/ISACAkenya.jpeg'
import imgPartner3 from '../../assets/kampala.jpeg'
import imgPartner4 from '../../assets/SA.jpeg'
import note from '../../assets/note-svgrepo-com.svg'
import lowerImg from '../../assets/Body-image-1-home.webp'
import bullet from '../../assets/bullet-point-svgrepo-com.svg'
import handshake from '../../assets/handshake-svgrepo-com.svg'


const MoreAboutUs = () => {
    return (
        <div className='info'>
            <Navbar />
            <div>
                <div className='info-header'>
                    <img src='https://wallpaperaccess.com/full/210915.jpg' alt='' />
                    <h1>Our Impact</h1>
                </div>
                <div className='info-story'>
                    <p>The IGNITE Youth Training Program is a dynamic initiative designed to train and empower 1 million young professionals in Africa.The program operates a quarterly cohort system, where each cohort comprises Youth who are recruited, trained, graduated,and linked to the industry. This approach ensures a steady and timely flow of skilled Cybersecurity and data protection
                        professionals into the job market.</p>
                </div>
                <div className='partner-section'>
                    <h2>Our Partners</h2>
                    <div className='line'></div>
                    <div className='section-content'>
                        <div className='dpgs'>
                            <img src={imgPartner1} alt='' />
                        </div>
                        <div className='isacake'>
                            <img src={imgPartner2} alt='' />
                        </div>
                        <div className='isacaug'>
                            <img src={imgPartner3} alt='' />
                        </div>
                        <div className='isacasa'>
                            <img src={imgPartner4} alt='' />
                        </div>
                        <div className='isacarw'>
                            <img src={imgPartner5} alt='' />
                        </div>
                        <div className='become'>
                            <img src={handshake} alt='' />
                            <h3><a href='https://www.scratchandscript.com/user_contact'>Become a partner</a></h3>
                        </div>
                    </div>
                </div>
                <div className="skills-report">
                    <h2 className='rs-title'>Skills Report</h2>
                    <div className="report-container">
                        <div className='report-img'>
                            <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/annual-report-conferance-template-design-c6099c816ee25cc66db94bc5751bb476_screen.jpg?ts=1675218745' alt='' />
                        </div>
                        <div className='report-summary'>
                            <div className='report-header'>
                                <div className='note-icon'>
                                    <img src={note} alt='icon' />
                                </div>
                                <div>
                                    <h2>2024 Sub-Sahara</h2>
                                    <p>Cybersecurity and Data Protection Skills Report</p>
                                </div>
                            </div>
                            <div className='rs-content'>
                                <p className='rs-paragraph'>In the IGNITE 2024 Sub-Sahara Learning & Skills Trends Report, we delve into these three key areas for leaders to focus on so that they can embrace them as part of their current and future workplace strategy.</p>
                                <div className='read-report-btn'>
                                    <a href=''>Read Report</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sdgs'>
                    <h2>Our SDG Focus</h2>
                    <div className='hr-line'></div>
                    <div className='sdg-content'>
                        <div className='sdg4'>
                            <img src="https://bergnergroup.com/uploads/sustainability-new/ods-color-en/4ODS.jpg" />
                        </div>
                        <div className='sdg5'>
                            <img src="https://treescapeplanet.org/wp-content/uploads/2023/05/gender-equality.png" alt='icon1' />
                        </div>
                        <div className='sdg8'>
                            <img src='https://green-connect.com.au/wp-content/uploads/2020/01/E_SDG-goals_icons-individual-cmyk-08-sm-768x768.jpg' />
                        </div>
                    </div>
                </div>
                <div className='we-want-to-partner'>
                    <div className="we-want-header">
                        <h2>We want to partner</h2>
                        <span className='highlight'>with you</span>
                    </div>
                    <div className='line other'></div>
                    <div className="we-want-body">
                        <div className="we-want-paragraph">
                            <p>To drive forward our mission within the IGNITE program, we are actively seeking partnerships with knowledge institutions,
                                private enterprises, and professional organizations.  As we aim to expand our training initiatives in the MEA (Middle East, and
                                Africa) region, we recognize the invaluable role that collaborative efforts play in achieving our objectives.<br /><br />
                                We welcome engagement from:<br /> <img src={bullet} className='bullet' alt='bullet' />Knowledge partners: Institutions, universities, and research centers willing to share expertise and resources.
                                <br /><img src={bullet} className='bullet' alt='bullet' /> Private companies: Businesses eager to contribute their capabilities and resources to support our training programs.
                                <br /><img src={bullet} className='bullet' alt='bullet' /> Professional bodies: Organizations dedicated to advancing professional standards and practices in relevant fields. <br /><br />  By uniting with us, you&#39;ll play a pivotal role in empowering individuals and communities across the MEA region through
                                education and skill development.<br /><br />
                                If you are interested in becoming a partner and shaping the future of training in the MEA region, please reach out to us on
                                info@scratchandscript.com.<br /><br />
                                Let’s IGNITE opportunities together!
                            </p>
                        </div>
                        <div className='we-want-img'>
                            <img src={lowerImg} alt="image1" />
                        </div>
                    </div>

                </div>
            </div>
            <Banner />
        </div>
    )
}

export default MoreAboutUs