import React from "react";
// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// import {useDocTitle} from '../components/CustomHook';
// import axios from 'axios';

const Portfolio = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="my-4 py-4" id="portfolio">
        <h2 className="my-2 text-center text-3xl text-black uppercase font-bold">
          Careers
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
        </div>

        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div>
            <p className="my-3 text-xl text-black">
              We are thrilled to announce exciting opportunities within our
              organization, welcoming fresh talent to breathe new life into our
              team. We offer a three-month unpaid internship program designed to
              provide newcomers with invaluable industry experience. During this
              period, interns who showcase relevant technical skills aligned
              with our field may be considered for an extension of their
              internship for an additional three months. Upon successful
              completion of this six-month internship, outstanding performers
              may receive an offer for full-time employment. This structured
              approach ensures that we thoroughly assess candidates'
              capabilities and commitment before making long-term commitments.
            </p>
          </div>
          <div>
            <p className="my-3 text-xl text-black">
              Furthermore, we are actively seeking experienced professionals to
              join our team, particularly those with expertise in areas such as
              Nexus and Devox. If you have a minimum of two years of experience
              in the field, we encourage you to apply for our software engineer
              positions. Our commitment to excellence and innovation drives us
              to seek individuals who can contribute meaningfully to our
              projects and goals.
            </p>
          </div>
          <div>
            <p className="my-3 text-xl text-black ">
              Attached below, you will find the application forms for both the
              unpaid internship and software engineer positions, along with
              additional information. We look forward to reviewing your
              applications and welcoming new members to our dynamic team."
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-bold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  <strong>Junior Software Engineer</strong>
                </h4>
                <p className="text-l font-medium leading-5 h-auto md:h-48">
                  We are looking for Full Stack Developers with experience in
                  building high-performing, scalable, enterprise-grade
                  applications. You will be part of a team that works on
                  mission-critical applications. Developer roles and
                  responsibilities include managing Spring Boot/Python/Java/Java
                  EE application/Vue.js applications while providing expertise
                  in the full software development lifecycle, from concept and
                  design to testing.
                </p>
                <div className="flex justify-center my-4">
                  {/* <a
                    href="https://www.linkedin.com/jobs/search/?currentJobId=3763139877&f_C=13300143&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=3763139877"
                    target="_blank"
                    className="text-white bg-black hover:bg-red-500 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                    rel="noreferrer"
                  > */}
                    <Link to="/apply"
                    target="_blank"
                    className="text-white bg-black hover:bg-red-500 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                    rel="noreferrer"

                    >
                      Apply Here
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    </Link>
                  {/* </a> */}
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
      <Footer />
    </>
  );
};

export default Portfolio;
