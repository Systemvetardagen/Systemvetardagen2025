import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ButtonProps {
    className?: string;
}

const LanguageSwitch: React.FC<ButtonProps> = ({ className }) => {
    const [t, i18n] = useTranslation();
    const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');
    const handleChangeLanguage = () => {
        const newLanguage = isEnglish ? 'se' : 'en';
        i18n.changeLanguage(newLanguage);
        setIsEnglish(!isEnglish);
    };
    const currentImage = isEnglish ? '/svgs/se.svg' : '/svgs/en.svg';
    return (
        <button
            onClick={handleChangeLanguage}
            className={`flex-shrink-0 ${className}`}
        >
            <img
                src={currentImage}
                alt="selected language"
                className="h-[4.5vh] rounded-xl"
            />
        </button>
    );
};

export default LanguageSwitch;
