import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './About.css'
import Partners from '../../Components/Partners/Partners'
import Banner from '../../Components/Banner/Banner'
import photo1 from '../../assets/Ann Noel Akoth.jpeg'
import photo2 from '../../assets/georginagiathi.jpeg'
import photo3 from '../../assets/elsiedulo.jpeg'
import photo4 from '../../assets/adwets.jpeg'
import photo5 from '../../assets/isabelkirabo.jpeg'
import photo6 from '../../assets/adegbajuemmanuel.jpeg'
import photo7 from '../../assets/gideonmutai.jpeg'
import photo8 from '../../assets/joshuaokemwa.jpeg'
import photo9 from '../../assets/gusongoiryebrian.jpeg'
import photo10 from '../../assets/naomiemma.jpeg'



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
                        <div className='img-container'>
                            <img className='card_img' src={photo1} alt='person1' />
                        </div>

                        <div className='name_country'>
                            <h4>Ann Noel Akoth</h4>
                            <p>Kenya</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='img-container'>
                            <img className='card_img' src={photo5} alt='person5' />
                        </div>
                        <div className='name_country'>
                            <h4>Isabel Kirabo</h4>
                            <p>Togo</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='img-container'>
                            <img className='card_img' src={photo2} alt='person2' />
                        </div>
                        <div className='name_country'>
                            <h4>Georgina Giathi</h4>
                            <p>Kenya</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='img-container'>
                            <img className='card_img' src={photo3} alt='person3' />
                        </div>
                        <div className='name_country'>
                            <h4>Elsie Dulo</h4>
                            <p>Egypt</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='img-container'>
                            <img className='card_img' src={photo4} alt='person1' />
                        </div>
                        <div className='name_country'>
                            <h4>Esther Adwets</h4>
                            <p>Mali</p>
                        </div>
                    </div>
                </div>

                <div className='body'>
                    <div className='card'>
                        <div className='img-container'>
                            <img className='card_img' src={photo6} alt='person6' />
                        </div>
                        <div className='name_country'>
                            <h4>Adegbaju Adeola Emmanuel</h4>
                            <p>Mali</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='img-container'>
                            <img className='card_img' src={photo7} alt='person7' />
                        </div>
                        <div className='name_country'>
                            <h4>Gideon Mutai</h4>
                            <p>Mali</p>
                        </div>

                    </div>
                    <div className='card'>
                        <div className='img-container'>
                            <img className='card_img' src={photo8} alt='person7' />
                        </div>
                        <div className='name_country'>
                            <h4>Joshua Ayieko Okemwa</h4>
                            <p>Mali</p>
                        </div>

                    </div>
                    <div className='card'>
                        <div className='img-container'>
                            <img className='card_img' src={photo9} alt='person8' />
                        </div>
                        <div className='name_country'>
                            <h4>Gusongoirye Brian</h4>
                            <p>Mali</p>
                        </div>

                    </div>
                    <div className='card'>
                        <div className='img-container'>
                            <img className='card_img' src={photo10} alt='person8' />
                        </div>
                        <div className='name_country'>
                            <h4>Naomi Emma Ekwealor</h4>
                            <p>Mali</p>
                        </div>
                    </div>
                </div>
            </div>
            <Partners />
            <Banner />
        </div>
    )
}
export default About