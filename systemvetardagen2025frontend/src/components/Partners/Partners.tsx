import React from 'react';
import { useTranslation } from 'react-i18next';
import partners from '../../assets/partners.json';

interface Partner {
    id: string;
    logo: string;
}

const partnersData: Partner[] = partners;

const Partners = () => {
    const { t } = useTranslation('global');

    return (
        <div className="w-screen flex flex-col items-center max-w-[90vw]">
            <h2 className="text-xl lg:text-3xl mb-8 font-light">
                {t('partners')}
            </h2>
            <div className="md:flex grid grid-cols-2 flex-row gap-4 md:gap-8">
                {partnersData.map(({ id }, index) => (
                    <a
                        className="bg-white flex items-center justify-center rounded-3xl hover:rounded-3xl transition-all duration-100 ease-linear shadow-xl p-2 hover:scale-105"
                        href={`/companies/${id}`}
                        key={index}
                    >
                        <img
                            src={`/companies/${id}/logo.webp`}
                            className="object-contain w-64"
                            alt="company logo"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Partners;