import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ButtonProps {
    className?: string;
}

const LanguageSwitch: React.FC<ButtonProps> = ({ className }) => {
    const [, i18n] = useTranslation();
    const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');
    const handleChangeLanguage = () => {
        const newLanguage = isEnglish ? 'sv' : 'en';
        i18n.changeLanguage(newLanguage);
        setIsEnglish(!isEnglish);
    };
    return (
        <button className={`flex gap-1 ${className}`} onClick={handleChangeLanguage}>
            <h1 className={`font-bold font-poppins text-[1.2rem] transition-opacity duration-300 ${!isEnglish && "opacity-50"} `}>EN</h1>
              <h1 className="font-bold font-poppins text-[1.2rem]">|</h1>
            <h1 className={`font-bold font-poppins text-[1.2rem] transition-opacity duration-300 ${isEnglish && "opacity-50"} `}>SE</h1>
        </button>
    );
};

export default LanguageSwitch;
