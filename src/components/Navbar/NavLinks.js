import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-red-500" to="/about#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-red-500" to="/services#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-red-500" to="/portfolio#portfolio">
                Careers
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-red-500" to="/contact#contact">
                Contact Us
            </HashLink>
            {/* <HashLink className="text-white bg-black hover:bg-red-500 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Demo our products
            </HashLink> */}
        </>
    )
}

export default NavLinks;
