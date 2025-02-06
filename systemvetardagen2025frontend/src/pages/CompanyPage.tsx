import React from 'react';
import { useParams } from 'react-router-dom';
import companiesData from '../assets/companies.json';
import { Company } from '../assets/companies';
import { useTranslation } from 'react-i18next';
import { Contact as ContactType } from '../assets/companies';

const companies: Company[] = companiesData;

const Contact: React.FC<ContactType> = ({ name, mail, phoneNumber }) => {
    const [t] = useTranslation('companies');
    return (
        <div className="p-8 flex flex-col gap-1 rounded-2xl shadow-md border-gray-300 border-4 text-center">
            <h1 className="text-2xl">{t('global.contact')}</h1>
            <h2>{name}</h2>
            <a className="text-link" href={`mailto:${mail}`}>
                {mail}
            </a>
            <a className="text-link" href={`tel:${phoneNumber}`}>
                {phoneNumber}
            </a>
        </div>
    );
};

const CompanyPage: React.FC = () => {
    const { companyId } = useParams<{ companyId: string }>();
    const company = companies.find((company) => company.id === companyId);
    const { t } = useTranslation('companies');

    if (!company) {
        return <p>Company not found</p>;
    }

    return (
        <div className="min-h-screen overflow-x-hidden items-center flex flex-col gap-10">
            <div className="h-[30vh] min-h-[250px] max-h-[400px] relative gradient-background w-full">
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white shadow-gray-300 shadow-md rounded-xl p-6">
                    <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="w-[400px] max-w-[75vw] max-h-[150px] object-contain"
                    />
                </div>
            </div>
            <div className="max-w-[90vw] gap-10 flex flex-col items-center my-10">
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
                <p className="px-[5vw] lg:px-[10vw] text-justify">
                    {t(`${companyId}.description.paragraph1`)}
                </p>
                <img
                    className="rounded-3xl max-h-[200px] w-full object-cover"
                    src={company.banner}
                    alt=""
                />
                <div>
                    <h1 className="text-4xl text-center">
                        {t('global.lookingFor', { company: company.name })}
                    </h1>
                </div>
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
                {t(`${companyId}.qualifications`)?.trim() && (
                    <div className="text-center px-[5vw] lg:px-[20vw]">
                        <h1 className="text-4xl mb-4">
                            {t('global.qualifications')}
                        </h1>
                        <div className="bg-accent rounded-3xl p-8">
                            {t(`${companyId}.qualifications`)}
                        </div>
                    </div>
                )}
                <div className="flex flex-col md:flex-row justify-evenly gap-10">
                    {company.contacts.length > 0 &&
                        company.contacts.map((contact, index) => (
                            <Contact
                                key={index}
                                name={contact.name}
                                mail={contact.mail}
                                phoneNumber={contact.phoneNumber}
                            ></Contact>
                        ))}
                </div>
                <a
                    className="text-link text-2xl text-center font-bold"
                    href={company.websiteLink}
                >
                    {t('global.learnMore', { company: company.name })}
                </a>
                <div className="flex gap-4">
                    <a
                        href="/companies"
                        className="bg-gradient-to-r from-primary via-secondary to-accent p-[3px] rounded-2xl"
                    >
                        <div className="p-4 bg-white rounded-xl text-center">
                            {t('global.backToCompanies')}
                        </div>
                    </a>
                    <button
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                        className="bg-gradient-to-r from-primary via-secondary to-accent p-[3px] rounded-2xl"
                    >
                        <div className="p-4 bg-white rounded-xl text-center">
                            {t('global.scrollToTop')}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CompanyPage;
