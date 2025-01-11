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
    const baseClasses = 'flex-shrink-0';
    const combinedClasses = `${baseClasses} ${className || ''}`;
    return (
        <button onClick={handleChangeLanguage} className={combinedClasses}>
            <img
                src={currentImage}
                alt="selected language"
                className="h-10 rounded-xl"
            />
        </button>
    );
};

export default LanguageSwitch;
