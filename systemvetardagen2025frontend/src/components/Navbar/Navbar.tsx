import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 1);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getNavLinkClass = ({ isActive }) =>
        `font-bold text-2xl text-black  ${
            isActive
                ? 'text-black underline underline-offset-8'
                : 'hover:text-gray-500'
        }`;
    return (
        <nav
            className={`${
                isSticky
                    ? 'fixed top-0 left-0 w-full rounded-none'
                    : 'absolute top-8 w-[90vw] mx-[5vw] rounded-3xl'
            } bg-white text-black px-4 py-1 z-10 flex items-center justify-between transition-all duration-150`}
        >
            <div className="flex-shrink-0">
                <img
                    src="/svgs/logo.svg"
                    alt="Left Logo"
                    className="h-14 p-0 m-0"
                />
            </div>
            <div className="flex justify-center flex-grow space-x-20 font-bold font-heading tracking-wide">
                <NavLink to="/" className={getNavLinkClass}>
                    Home
                </NavLink>
                <NavLink to="/companies" className={getNavLinkClass}>
                    Companies
                </NavLink>
                <NavLink to="/visit-info" className={getNavLinkClass}>
                    Visit Info
                </NavLink>
                <NavLink to="/about" className={getNavLinkClass}>
                    About
                </NavLink>
            </div>
            <div className="flex-shrink-0">
                <img
                    src="/svgs/en.svg"
                    alt="selected-language"
                    className="h-10 rounded-xl"
                />
            </div>
        </nav>
    );
};

export default Navbar;
