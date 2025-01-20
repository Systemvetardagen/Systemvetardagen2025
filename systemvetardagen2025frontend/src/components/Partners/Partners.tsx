import React from 'react';
import { useTranslation } from 'react-i18next';
import partners from '../../assets/partners.json';
const Partners = () => {
    const [t] = useTranslation('global');
    return (
        <div className="">
            <h2 className="text-xl lg:text-3xl mb-8 font-light">{t('partners')}</h2>
            <div className="flex flex-col md:flex-row gap-8">
                {partners.map((partner, index) => (
                    <img
                        className="h-8 lg:h-12"
                        key={index}
                        src={partner.src}
                        alt={partner.alt + ' logo'}
                    />
                ))}
            </div>
        </div>
    );
};

export default Partners;
