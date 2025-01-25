import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ButtonProps {
    className?: string;
}

const LanguageSwitch: React.FC<ButtonProps> = ({ className }) => {
    const [t, i18n] = useTranslation();
    const [isChecked, setIsChecked] = useState(false);
    const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');
    const handleChangeLanguage = () => {
        const newLanguage = isEnglish ? 'se' : 'en';
        i18n.changeLanguage(newLanguage);
        setIsEnglish(!isEnglish);
    };
    const handleChange = () => {
        setIsChecked(!isChecked);
        handleChangeLanguage();
    };
    return (
        <button className={`flex gap-1 ${className}`} onClick={handleChange}>
            <h1 className={`font-bold font-poppins text-2xl transition-opacity duration-300 ${isChecked && "opacity-50"} `}>EN</h1>
            <h1 className="font-bold font-poppins text-2xl">|</h1>
            <h1 className={`font-bold font-poppins text-2xl transition-opacity duration-300 ${!isChecked && "opacity-50"} `}>SE</h1>
            {/* <label className="relative flex items-center  cursor-pointer">
                <input
                    type="checkbox"
                    onChange={handleChange}
                    checked={isChecked}
                    value=""
                    className="sr-only peer"
                />
                <div className="w-20 h-10 bg-white peer-focus:outline-0 relative peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:bg-blue-400 bg-white after:h-10 after:w-10 after:rounded-xl after:transition-all dark:border-gray-600 ">
                    <span className="absolute left-0 top-0 z-10 font-bold">EN</span>
                    <span className="absolute right-0 top-0 z-10 font-bold">SE</span>
                </div>
            </label> */}
        </button>
    );
};

export default LanguageSwitch;
