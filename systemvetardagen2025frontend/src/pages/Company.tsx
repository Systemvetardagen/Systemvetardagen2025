import React from 'react';
import { useParams } from 'react-router-dom';
import { companies } from '../assets/companies';
import { useTranslation } from 'react-i18next';

interface contactProps {
    header: string;
    name: string;
    mail: string;
    phoneNumber: string;
}
const contact: React.FC<contactProps> = ({ header, name, mail, phoneNumber }) => {
    // work in progress
    return (
        <div>
            <h1>{header}</h1>
            <h2>{name}</h2>
            <a href={`mailto:${mail}`}>{mail}</a>
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </div>
    )
};

const Company: React.FC = () => {
    const { companyId } = useParams<{ companyId: string }>();
    const company = companies.find((company) => company.id === companyId);
    const [t] = useTranslation('companies');
    if (!company) {
        return <p>Company not found</p>;
    }
    return (
        <div className="min-h-screen overflow-x-hidden items-center flex flex-col gap-10">
            <div className="h-[30vh] gradient-background w-full"></div>
            <div className="bg-white absolute top-[15vh] shadow-gray-300 shadow-md rounded-xl">
                <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-[20vh]"
                />
            </div>
            <div className="w-screen px-[8vw] md:px-[15vw] gap-10 lg:px-[20vw] flex flex-col items-center my-10">
                <div className="text-left border-gray-300 border-4 rounded-3xl w-[400px] max-w-[90vw] p-4 flex gap-4 flex-col">
                    <div>
                        <h1>{t('global.areaOfBusiness')}</h1>
                        {t(`${companyId}.areaOfBusiness`)}
                    </div>
                    <div className="flex justify-between gap-10">
                        <strong>{t('global.founded')}</strong>
                        <span>{company.founded}</span>
                    </div>
                    <div className="flex justify-between gap-10">
                        <strong>{t('global.employeesInSweden')}</strong>
                        <span>{company.employeesSweden}</span>
                    </div>
                    {company.employeesTotal && (
                        <div className="flex justify-between gap-10">
                            <strong>
                                {t('global.employeesInternationally')}
                            </strong>
                            <span>{company.employeesTotal}</span>
                        </div>
                    )}
                </div>
                <p className="px-[5vw] text-justify">
                    {t(`${companyId}.description.paragraph1`)}
                </p>
                <p className="px-[5vw] text-justify">
                    {t(`${companyId}.description.paragraph2`)}
                </p>
                <img className="rounded-3xl" src={company.banner} alt="" />
                {company.video && (
                    <div className="flex justify-center">
                        <video
                            className="rounded-3xl"
                            controls
                            autoPlay
                            width="600"
                        >
                            <source src={company.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
                <div>
                    <h1 className="text-[2.5vh]">
                        {t('global.lookingFor', { company: company.name })}
                    </h1>
                </div>
                <div className="text-center">
                    <h1 className="text-[2.5vh] mb-4">
                        {t('global.qualifications')}
                    </h1>
                    <div className="bg-accent rounded-3xl p-4">
                        {t(`${companyId}.qualifications`)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
