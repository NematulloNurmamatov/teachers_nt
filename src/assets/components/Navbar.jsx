import React, { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl dark:text-white">Tailblocks</span>
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
