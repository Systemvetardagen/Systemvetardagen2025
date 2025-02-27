import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const SignupLink: React.FC = () => {
    const [t] = useTranslation<string>('landing');
    return (
        <div className="bg-[#E5E8FF] rounded-3xl py-10 flex flex-col items-center gap-10">
            <h1 className="text-xl md:text-2xl lg:text-4xl px-2">
                {t('body.uppdated.header')}
            </h1>
            <p className="w-3/4 text-base md:text-xl text-center">
                {t('body.uppdated.body')}
            </p>
            <NavLink to="/signup">
                <button className="bg-white py-4 px-6 rounded-full text-base md:text-xl transition-transform duration-200 hover:scale-110">
                    {t('body.uppdated.button')}
                </button>
            </NavLink>
        </div>
    );
};

export default SignupLink;
