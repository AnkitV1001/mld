import React from 'react';
import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const Intro = () => {
    return (
        <>
        <div>
            <NavBar/>
        </div>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-black-900 font-bold">MORE ABOUT KEEN AND ABLE</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 '>Keen and Able started as a college dream in the mind of a few youngsters who just wished to have something to call their own. Open Source happened by chance. But has stuck for long. Over the years, we have dabbled in many associated Open Source technologies and successfully helped our customers adopt them.</p>
                            </div>
                            <div>
                                <p className='my-3 text-xl text-gray-600'>We believe our strength lies in taking challenges head on and be of help to our customers in all areas of software deployment - architecture and planning, deployment and support.</p>
                            </div>
                            <div>
                                <p className='my-3 text-xl text-gray-600 '>Being a services focused organisation, we are able to think beyond product and strive to provide our customers with solutions that help them address their business need rather than deploy a product. </p>
                            </div>
                            <div>
                                <p className='my-3 text-xl text-gray-600 '>We have been quite fortunate to have been able to work both in community and enterprise Open Source solution deployments. We have been living our dream of  creating people who are deft in fulfilling customer needs through Open Source means.

</p>
                            </div>
                            <Link to="/contact" className="text-white bg-black hover:bg-red-500 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Contact us
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer/>
        </>
    )
}

export default Intro;