import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import companiesData from '../assets/companies.json';
import { Company } from '../assets/companies';
import { useTranslation } from 'react-i18next';
import { Contact as ContactType } from '../assets/companies';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

const companies: Company[] = companiesData;

const Contact: React.FC<ContactType> = ({ name, mail, phoneNumber }) => {
    const [t] = useTranslation('companies');
    return (
        <div className="p-8 flex flex-col gap-1 rounded-2xl shadow-md bg-white text-center">
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

const RecruitmentCard: React.FC<Company> = (company) => {
    const [open, setOpen] = useState<boolean>(false);
    const [t] = useTranslation('companies');
    return (
        company.candidatePrograms &&
        company.masterPrograms &&
        company.positions && (
            <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {t('global.lookingFor', { company: company.name })}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card
                        title="Bachelor Programs"
                        items={company.candidatePrograms.map((program) =>
                            t(`programs.${program}`)
                        )}
                        className="bg-[#ffecf7] border-[#DB2677] text-[#DB2677]"
                    />
                    <Card
                        title="Master Programs"
                        items={company.masterPrograms.map((program) =>
                            t(`programs.${program}`)
                        )}
                        expandable
                        onExpand={() => setOpen(true)}
                        className="bg-[#f3e9ff] border-[#9332E9] text-[#9332E9]"
                    />
                    <Card
                        title="Positions"
                        items={company.positions.map((position) =>
                            t(`positions.${position}`)
                        )}
                        className="bg-[#dbebff] border-[#2762EA] text-[#2762EA]"
                    />
                </div>
                {t(`${company.id}.qualifications`)?.trim() && (
                    <div className="mt-6 p-4 bg-[#FEF9C2] border-l-4 font-light border-[#CA8C0A] rounded-lg">
                        <h3 className="font-semibold text-lg mb-2 text-[#CA8C0A]">
                            {t('global.qualifications')}
                        </h3>
                        <p className="font-light text-gray-900">
                            {t(`${company.id}.qualifications`)}
                        </p>
                    </div>
                )}
                {open && (
                    <div className="p-6 bg-white rounded-lg shadow-lg w-96 mx-auto">
                        <h3 className="text-xl font-bold mb-4">
                            Bachelor&apos;s programmes
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                            {company.candidatePrograms.map((program, index) => (
                                <li key={index}>{t(`programs.${program}`)}</li>
                            ))}
                        </ul>
                        <button
                            className="mt-4 w-full bg-gray-200 p-2 rounded"
                            onClick={() => setOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        )
    );
};

type CardProps = {
    title: string;
    items: string[];
    expandable?: boolean;
    onExpand?: () => void;
    className?: string;
};

const Card: React.FC<CardProps> = ({ title, items, className }) => (
    <div
        className={`p-4 bg-gray-100 rounded-lg shadow-sm border-l-4 font-light ${className}`}
    >
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <ul className="space-y-1 list-disc pl-4">
            {items.map((item, index) => (
                <li className="font-light text-gray-600" key={index}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const CompanyPage: React.FC = () => {
    const { companyId } = useParams<{ companyId: string }>();
    const company = companies.find((company) => company.id === companyId);
    const { t } = useTranslation('companies');
    if (!company) {
        return <p>Company not found</p>;
    }
    const logoPath = `/companies/${company.id}/logo.webp`;
    //const bannerPath = `/companies/${company.id}/banner.webp`; i dont like the banner
    return (
        <div className="min-h-screen overflow-x-hidden items-center flex flex-col gap-10">
            <div className="h-[30vh] min-h-[250px] max-h-[400px] relative gradient-background w-full">
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white shadow-gray-300 shadow-md rounded-xl p-6">
                    <img
                        src={logoPath}
                        alt={`${company.name} logo`}
                        className="max-w-[75vw] max-h-[125px] object-contain"
                    />
                </div>
            </div>

            <div className="max-w-[90vw] gap-10 flex flex-col items-center my-10">
                {company.slogan && <h2 className="text-lg text-gray-600">{company.slogan}</h2>}
                <div className="text-left shadow-md rounded-3xl w-[400px] max-w-[90vw] p-4 flex gap-4 flex-col">
                    <div>
                        <h1>{t('global.areaOfBusiness')}</h1>
                        {t(`${companyId}.areaOfBusiness`)}
                    </div>
                    <div className="flex justify-between gap-10">
                        <strong>{t('global.founded')}</strong>
                        <span>{company.founded}</span>
                    </div>
                    {company.employeesSweden && (
                        <div className="flex justify-between gap-10">
                            <strong>{t('global.employeesInSweden')}</strong>
                            <span>{company.employeesSweden}</span>
                        </div>
                    )}
                    {company.employeesTotal && (
                        <div className="flex justify-between gap-10">
                            <strong>
                                {t('global.employeesInternationally')}
                            </strong>
                            <span>{company.employeesTotal}</span>
                        </div>
                    )}
                </div>
                <div className="flex gap-4">
                    {company.linkedIn && (
                        <a href={company.linkedIn}>
                            <Linkedin />
                        </a>
                    )}
                    {company.instagram && (
                        <a href={company.instagram}>
                            <Instagram />
                        </a>
                    )}
                    {company.facebook && (
                        <a href={company.facebook}>
                            <Facebook />
                        </a>
                    )}
                </div>
                <p className="w-full max-w-5xl mx-auto text-justify">
                    {t(`${companyId}.description.paragraph1`)}
                </p>
                {/* <img
                    className="rounded-3xl max-h-[200px] w-full object-cover"
                    src={bannerPath}
                    alt=""
                /> */}
                {t(`${companyId}.description.paragraph2`)?.trim() && (
                    <p className="w-full max-w-5xl mx-auto text-justify">
                        {t(`${companyId}.description.paragraph2`)}
                    </p>
                )}
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
                <RecruitmentCard {...company} />
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
                        className="rounded-2xl shadow-md p-4 border-2 hover:rounded-3xl transition-all duration-100"
                    >
                        {t('global.backToCompanies')}
                    </a>
                    <button
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                        className="rounded-2xl shadow-md p-4 border-2 hover:rounded-3xl transition-all duration-100"
                    >
                        {t('global.scrollToTop')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CompanyPage;
