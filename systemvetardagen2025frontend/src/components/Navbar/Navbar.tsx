import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
    const [t] = useTranslation('global');
    const links = [
        { label: t('navbar.home'), href: '/' },
        { label: t('navbar.companies'), href: '/companies' },
        { label: t('navbar.visit-info'), href: '/visit-info' },
        { label: t('navbar.about'), href: '/about' },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 1);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getNavLinkClass = ({ isActive }: { isActive: boolean }): string =>
        `font-bold text-[3vh] text-black ${
            isActive
                ? 'text-black underline underline-offset-4'
                : 'hover:text-gray-500'
        }`;

    return (
        <nav
            className={`${
                isSticky
                    ? 'fixed top-0 left-0 w-full rounded-none'
                    : 'absolute top-8 w-[90vw] mx-[5vw] rounded-2xl'
            } flex bg-white text-black px-4 lg:py-1  z-10 items-center justify-between transition-all duration-150`}
        >
            <a href="/" className="flex-shrink-0">
                <img
                    src="/svgs/logo.svg"
                    alt="Left Logo"
                    className="h-10 p-0 m-0"
                />
            </a>
            <div className="hidden lg:flex justify-center flex-grow space-x-20 font-bold font-heading tracking-wide">
                {links.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.href}
                        className={getNavLinkClass}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>
            <div className="block lg:hidden z-10">
                <button
                    onClick={toggleMenu}
                    className="flex justify-center items-center"
                >
                    <img
                        src={isOpen ? '/svgs/cross.svg' : '/svgs/burger.svg'}
                        className="h-12 p-1"
                        alt=""
                    />
                </button>
            </div>
            {isOpen ? (
                <div className="fixed top-0 left-0 flex flex-col justify-center gap-4 p-4 font-bold font-heading tracking-wide bg-white  w-screen transition-transform duration-300 ease-in-out">
                    {links.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.href}
                            className={getNavLinkClass}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <LanguageSwitch />
                </div>
            ) : null}
            <LanguageSwitch className="hidden lg:flex" />
        </nav>
    );
};

export default Navbar;
