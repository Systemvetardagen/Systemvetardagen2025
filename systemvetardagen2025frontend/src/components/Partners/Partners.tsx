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
            <div className="flex flex-col md:flex-row gap-8">
                {partnersData.map(({ id, logo }, index) => (
                    <a
                        className="bg-white rounded-2xl hover:rounded-3xl transition-all duration-100 ease-linear shadow-xl p-10 "
                        href={`/companies/${id}`}
                        key={index}
                    >
                        <img
                            src={logo}
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