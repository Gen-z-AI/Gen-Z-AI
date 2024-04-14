import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, Image, Card } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../public/Images/logo.png'
import Auth0UserInfo from '../auth0UserInfo/Auth0UserInfo';


function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/home'
        },
        {
            id: 2,
            name: 'About',
            path: '/explore'
        },
        {
            id: 3,
            name: 'Service',
            path: '/doctor'
        },
        {
            id: 4,
            name: 'Contact Us',
            path: '/contact-us'
        },
    ];

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Router>
            <div className='relative'>
                <div className={`flex items-center justify-between p-2 shadow rounded-2xl mt-3 mx-1 md:mx-auto ${showMenu ? 'rounded-none' : ''}`}>
                    <div className='flex gap-10 items-center relative'>
                        <div className="relative">
                            <Image src={logo} alt="Logo" width={60} height={60} className="transition-transform transform-gpu hover:scale-105 md:max-w-md md:h-50" />
                        </div>

                        <ul className={`md:flex gap-8 hidden font-bold cursor-pointer`}>
                            {Menu.map((item, index) => (
                                <li key={index} className="list-item p-2 rounded-md hover:bg-gradient-to-r from-blue-400 to-blue-600 transition-colors duration-300">
                                    <Link to={item.path} style={{textDecoration: 'none'}}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex gap-3'>
                        <Auth0UserInfo/>
                        <button className="block md:hidden text-gray-800 mr-5" onClick={handleToggleMenu}>
                            {showMenu ?
                                <FaTimes className="text-2xl transition-colors duration-300 text-blue-500 hover:text-blue-700" />
                                :
                                <FaBars className="text-2xl transition-colors duration-300 text-blue-500 hover:text-blue-700" />}
                        </button>
                    </div>
                </div>

                {showMenu && (
                    <Card className="absolute items-center justify-between p-2 shadow rounded-2xl mx-1 md:mx-auto left-0 w-full md:hidden" style={{ backgroundColor: 'white', borderRadius: '0 0 20px 20px', zIndex: 999 }}>
                        <Card.Body>
                            <ul className="flex flex-col gap-2">
                                {Menu.map((item, index) => (
                                    <li key={index} className="p-2 rounded-md hover:bg-gradient-to-r from-blue-400 to-blue-600 transition-colors duration-300">
                                        <Link to={item.path} onClick={() => setShowMenu(false)} style={{textDecoration: 'none'}}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </Router>
    );
}

export default Header;
