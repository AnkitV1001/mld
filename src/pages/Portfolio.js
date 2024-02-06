import React from 'react';
import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
// import {useDocTitle} from '../components/CustomHook';
// import axios from 'axios';

const Portfolio = () => {
    return (
        <>
        <div>
            <NavBar/>
        </div>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-black uppercase font-bold">Careers</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-bold my-4 text-lg md:text-2xl text-center mb-4 h-12"><strong>Junior Software Engineer</strong></h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                We are looking for Full Stack Developers with experience in building high-performing, scalable, enterprise-grade applications.
You will be part of a team that works on mission-critical applications. Developer roles and responsibilities include managing Spring Boot/Python/Java/Java EE application/Vue.js applications while providing expertise in the full software development lifecycle, from concept and design to testing.
                                </p>
                                <div className="flex justify-center my-4">
                                    <a href="https://www.linkedin.com/jobs/search/?currentJobId=3763139877&f_C=13300143&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=3763139877" target="_blank" className="text-white bg-black hover:bg-red-500 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Apply Here
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </a>
                                </div>
                                
                                {/* <ul className="border-t border-gray-300 py-8 space-y-6">
                                    <li className="flex items-center space-x-2 px-8">
                                        <span className="bg-blue-600 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="text-gray-600 capitalize">Free Setup Guidance</span>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        

                                           
                    </div>
                </div>
            </div>
                <Footer/>
        </>
    )
}

export default Portfolio;