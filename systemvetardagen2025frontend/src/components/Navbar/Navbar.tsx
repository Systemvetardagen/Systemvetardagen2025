import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 1);
            if (window.innerWidth < 1024 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const getNavLinkClass = ({ isActive }: { isActive: boolean }): string =>
        `font-semibold text-[20px] text-black ${
            isActive
                ? 'text-black underline underline-offset-4'
                : 'hover:text-gray-500'
        }`;

    return (
        <nav
            className={`${
                isSticky
                    ? 'fixed top-0 left-0 w-full rounded-none h-14'
                    : 'absolute top-8 w-[90vw] mx-[5vw] rounded-3xl'
            } flex bg-white text-black px-4 lg:py-3 z-10 items-center justify-between transition-all duration-150 shadow-lg`}
        >{/* FREDRIK SNÄLLAAA LÅT DEN VARA SNÄLLA */}
        {/* NE DEDÄR ÄR ACTUALLY ETT BROTT SLUTA JAG ACCEPTERAR MAX P-2 JAG KOMMER LÄGGA EN --force JAG SVÄR*/}
        {/* NEJ DET BLIR 3 FUCK U */}
        {/* O_O me verry sad */}
            <NavLink to="/" className="flex-shrink-0">
                <img
                    src="/svgs/specialLogo.svg"
                    alt="Left Logo"
                    className="h-10 p-0 m-0"
                />
            </NavLink>
            <div className="hidden lg:flex justify-center flex-grow space-x-20 font-bold font-heading tracking-wide">
                {links.map((link, index) => (
                    <NavLink key={index} to={link.href} className={getNavLinkClass}>
                        {link.label}
                    </NavLink>
                ))}
            </div>
            <div className="block lg:hidden z-30">
                <button onClick={toggleMenu} className="flex justify-center items-center">
                    <img
                        src={isOpen ? '/svgs/cross.svg' : '/svgs/burger.svg'}
                        className="h-12 p-1 transition-all duration-300 ease-in-out"
                        style={{
                            opacity: isOpen ? '1' : '0.8',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                        alt="Toggle Menu"
                    />
                </button>
            </div>
            {isSticky && (
                <div className="absolute bottom-0 left-0 w-screen h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            )}
            <div
                className={`fixed inset-0 z-20 bg-black/50 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsOpen(false)}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`absolute top-0 left-0 flex flex-col justify-center gap-4 ${
                        isSticky ? 'pt-3' : 'pt-10'
                    } pl-12 pr-10 ${isSticky ? 'pb-4' : 'pb-10'} font-bold font-heading tracking-wide bg-white w-screen transition-transform duration-300 ease-out ${
                        isOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
                >
                    {links.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.href}
                            className={getNavLinkClass}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <div onClick={() => setIsOpen(false)}>
                        <LanguageSwitch />
                    </div>
                    <div className="absolute bottom-0 left-0 w-screen h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                </div>
            </div>
            <div onClick={() => setIsOpen(false)} className="hidden lg:flex">
                <LanguageSwitch />
            </div>
        </nav>
    );
};

export default Navbar;
