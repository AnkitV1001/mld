import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-4xl mb-4">
                  <span style={{ color: "red" }}>Keen</span>
                  <strong style={{ fontSize: "45px", color: "black" }}>
                    Able
                  </strong>
                </h3>
                <div className="text-md font-medium text-gray-600">
                  <h5>B149, Ground Floor</h5>
                  <p>Sector 63,</p>
                  <p>Noida,</p>
                  <p>India - 201301.</p>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
              <h6 className="text-black text-xl font-bold mb-4">LINKS</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="about#about"
                    className="text hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="services#services"
                    className="text hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="contact#contact"
                    className="text hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
              <h6 className="text text-xl font-bold mb-4">OUR SERVICES</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="services#services"
                    className="text hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Software Advisory & Architecting Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#services"
                    className="text hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Software Build & Deployment Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Monitoring & Support Services
                  </Link>
                </li>
                
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-black">
              <div className="text-xl mb-6">Social Media Links.</div>

              <div className="text-md font-medium mb-6">
                Follow us on social media.
              </div>
              {/* <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li>
                                        <Link to="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                        </svg>
                                        </Link>
                                    </li>
                                    <li className="ml-4">
                                        <Link to="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                        </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <a
                  href="https://www.facebook.com/Alwaysbeenopen/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current font-black hover:animate-pulse"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/keenable/?originalSubdomain=in"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current font-black hover:animate-pulse"
                  >
                    <circle cx="4.983" cy="5.009" r="2.188"></circle>
                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/keenandable?lang=en"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current font-black hover:animate-pulse"
                  >
                    <path d="M22.46 5.184c-.825.368-1.716.617-2.64.73.949-.568 1.678-1.466 2.022-2.537-.891.528-1.878.912-2.93 1.123-.84-.896-2.037-1.459-3.354-1.459-2.543 0-4.6 2.057-4.6 4.6 0 .36.042.71.122 1.048-3.824-.193-7.204-2.02-9.466-4.799-.395.67-.622 1.45-.622 2.282 0 1.582.805 2.978 2.028 3.794-.748-.025-1.451-.23-2.068-.573v.057c0 2.207 1.566 4.048 3.65 4.464-.382.103-.784.157-1.2.157-.29 0-.572-.027-.847-.08.573 1.81 2.238 3.126 4.204 3.163-1.54 1.215-3.475 1.94-5.57 1.94-.362 0-.722-.022-1.078-.063 1.986 1.29 4.35 2.042 6.896 2.042 8.272 0 12.792-6.847 12.792-12.793 0-.195-.004-.39-.012-.582.878-.633 1.64-1.422 2.244-2.32z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-gray-200 font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                <HashLink to="#" className=" hover:text-gray-900">
                  Keen and Able
                </HashLink>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
