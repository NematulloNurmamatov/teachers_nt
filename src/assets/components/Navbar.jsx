import React, { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import nur from '../images/nur_logo.jpg';

export default function Navbar() {
    const [is_dark, setIs_dark] = useState(false);

    function darkModeHandle() {
        let customHtml = document.documentElement;
        let is_dark = localStorage.getItem('isDark');

        if (is_dark == null || is_dark === 'light') {
            customHtml.classList.add('dark');
            localStorage.setItem('isDark', 'dark');
            setIs_dark(true);
        } else {
            customHtml.classList.remove('dark');
            localStorage.setItem('isDark', 'light');
            setIs_dark(false);
        }
    }

    useEffect(() => {
        let is_dark = localStorage.getItem('isDark');
        if (is_dark === 'dark') {
            document.documentElement.classList.add('dark');
            setIs_dark(true);
        }
    }, []);

    return (
        <div className='dark:bg-gray-800 dark:text-white '>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img style={{width: "110px", height: "30px"}} src={nur} alt="logo" />
                        <span className="ml-3 text-xl dark:text-white">Mufid</span>
                    </a>
                    <nav className="md:ml-auto flex gap-4 mr-[20px] flex-wrap items-center text-base justify-center">
                        <Link className='text-black dark:text-white' to={"/"}>
                            Teachers
                        </Link>
                        <Link className='text-black dark:text-white' to={"/students"}>
                            Students
                        </Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                        onClick={darkModeHandle}
                    >
                        <MdDarkMode />
                    </button>
                </div>
            </header>
        </div>
    );
}
