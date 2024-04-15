import React from 'react';
import logo from '../../../../public/Images/logo.png'
import { FaAngleDoubleRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto py-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and About */}
                    <div className="footer-widget">
                        <img src={logo} alt="logo" className="max-w-full h-auto max-h-12 mb-6 mx-auto md:mx-0" />
                        <p className="text-center md:text-left">
                            At Gen-Z-AI, we're dedicated to advancing the frontier of artificial intelligence for the betterment of humanity. Embrace the future of innovation with our cutting-edge AI technologies. Let us be your guide in navigating the possibilities of AI.
                        </p>
                    </div>

                    {/* For Innovators */}
                    <div className="footer-widget">
                        <h2 className="footer-title font-bold text-2xl">For Innovators</h2>
                        <ul className='mt-3 gap-5'>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Explore AI Solutions</li>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Collaborate with Gen-Z-AI</li>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Access AI Research</li>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Join the Gen-Z-AI Community</li>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Develop AI Applications</li>
                        </ul>
                    </div>

                    {/* For Researchers */}
                    <div className="footer-widget">
                        <h2 className="footer-title font-bold text-2xl">For Researchers</h2>
                        <ul className='mt-3 gap-5'>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />AI Research Opportunities</li>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Access Research Resources</li>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Collaborate with Peers</li>
                            <li className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:translate-x-1 cursor-pointer"><FaAngleDoubleRight className="inline-block mr-2" />Contribute to Gen-Z-AI's Mission</li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="footer-widget">
                        <h2 className="footer-title font-bold text-2xl">Get in Touch</h2>
                        <div className="footer-contact-info mt-3">
                            <div className="flex items-center mb-3">
                                <FaMapMarkerAlt className="mr-2" />
                                <p>123, Park Avenue, Springfield, IL, 62701, USA</p>
                            </div>
                            <div className="flex items-center mb-3">
                                <FaPhoneAlt className="mr-2" />
                                <p>+1 (555) 123-4567</p>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="mr-2" />
                                <p><a href="mailto:info@genzai.com">info@genzai.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-gray-800 py-2">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-center md:text-left mb-3 md:mb-0">
                            © {(new Date()).getFullYear()} All Rights Reserved
                        </p>
                        <ul className="flex flex-wrap gap-2 justify-center md:justify-end">
                            <li><a href="#" className="text-white">Terms of Use</a></li>
                            <li><a href="#" className="text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
