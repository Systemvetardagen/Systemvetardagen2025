import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import companiesData from '../assets/companies.json';
import { Company } from '../assets/companies';
import { useTranslation } from 'react-i18next';
import { Contact as ContactType } from '../assets/companies';
import {
    Linkedin,
    Instagram,
    Facebook,
    Briefcase,
    Calendar,
    Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection/FadeInSection';

// Centered even box shadow style
// const centeredShadow = '0 0 20px rgba(0, 0, 0, 0.15)';

const companies: Company[] = companiesData;

const Contact: React.FC<ContactType> = ({ name, mail, phoneNumber }) => {
    const [t] = useTranslation('companies');
    return (
        <FadeInSection
            triggerOnce={true}
            direction="fadeUp"
            className="p-8 flex flex-col gap-1 rounded-2xl shadow-md bg-white text-center"
        >
            <h1 className="text-2xl">{t('global.contact')}</h1>
            <h2>{name}</h2>
            <a className="text-link" href={`mailto:${mail}`}>
                {mail}
            </a>
            <a className="text-link" href={`tel:${phoneNumber}`}>
                {phoneNumber}
            </a>
        </FadeInSection>
    );
};

const RecruitmentCard: React.FC<Company> = (company) => {
    const [open, setOpen] = useState<boolean>(false);
    const [t] = useTranslation('companies');
    return (
        company.candidatePrograms &&
        company.masterPrograms &&
        company.positions && (
            <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-5xl mx-auto">
                <FadeInSection
                    triggerOnce={true}
                    direction="fadeDown"
                    className="text-2xl font-bold text-center mb-6"
                >
                    {t('global.lookingFor', { company: company.name })}
                </FadeInSection>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FadeInSection direction="fadeLeft" triggerOnce={true}>
                        <Card
                            title="Bachelor Programs"
                            items={company.candidatePrograms.map((program) =>
                                t(`programs.${program}`)
                            )}
                            className="bg-[#ffe2e2] border-[#DB2677] text-[#DB2677]"
                        />
                    </FadeInSection>
                    <FadeInSection direction="fadeDown" triggerOnce={true}>
                        <Card
                            title="Master Programs"
                            items={company.masterPrograms.map((program) =>
                                t(`programs.${program}`)
                            )}
                            expandable
                            onExpand={() => setOpen(true)}
                            className="bg-[#e7d3ff] border-[#9332E9] text-[#9332E9]"
                        />
                    </FadeInSection>
                    <FadeInSection direction="fadeRight" triggerOnce={true}>
                        <Card
                            title="Positions"
                            items={company.positions.map((position) =>
                                t(`positions.${position}`)
                            )}
                            className="bg-[#cae0ff] border-[#2762EA] text-[#2762EA]"
                        />
                    </FadeInSection>
                </div>
                {t(`${company.id}.qualifications`)?.trim() && (
                    <FadeInSection
                        triggerOnce={true}
                        direction="fadeUp"
                        className="mt-6 p-4 bg-[#FEF9C2] border-l-4 shadow-md font-light border-[#CA8C0A] rounded-lg"
                    >
                        <h3 className="font-semibold text-lg mb-2 text-[#CA8C0A]">
                            {t('global.qualifications')}
                        </h3>
                        <p className="font-light text-gray-900">
                            {t(`${company.id}.qualifications`)}
                        </p>
                    </FadeInSection>
                )}
                {open && (
                    <div className="p-6 bg-white rounded-lg w-96 shadow-md mx-auto">
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
        className={`p-4 h-full rounded-lg border-l-4 shadow-md font-light ${className}`}
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
    return (
        <div className="min-h-screen overflow-x-hidden items-center flex flex-col gap-10 bg-[#F7F4FF]">
            <div className="relative w-full">
                <div className="flex items-center justify-center h-[30vh] min-h-[300px] max-h-[400px] w-full overflow-hidden gradient-background">
                    <div className="absolute -bottom-10 left-1/2 transform shadow-md -translate-x-1/2 bg-white rounded-xl p-6">
                        <img
                            src={logoPath}
                            alt={`${company.name} logo`}
                            className="h-32 w-auto max-w-[600px] object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-[90vw] gap-10 flex flex-col items-center my-10">
                {company.slogan && (
                    <h2 className="text-lg text-gray-600">{company.slogan}</h2>
                )}
                <div className="bg-white rounded-3xl w-[500px] max-w-[95vw] p-6 shadow-md">
                    <div className="flex flex-col gap-5">
                        <FadeInSection
                            triggerOnce={true}
                            direction="fadeLeft"
                            className="flex items-start gap-3"
                        >
                            <div className="text-blue-500 mt-1">
                                <Briefcase size={20} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-gray-600 text-sm font-medium">
                                    {t('global.areaOfBusiness')}
                                </h3>
                                <p className="text-gray-800">
                                    {t(`${companyId}.areaOfBusiness`)}
                                </p>
                            </div>
                        </FadeInSection>
                        <FadeInSection
                            triggerOnce={true}
                            direction="fadeLeft"
                            className="flex items-start gap-3"
                        >
                            <div className="text-blue-500 mt-1">
                                <Calendar size={20} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-gray-600 text-sm font-medium">
                                    {t('global.founded')}
                                </h3>
                                <p className="text-gray-800">
                                    {company.founded}
                                </p>
                            </div>
                        </FadeInSection>
                        {company.employeesSweden && (
                            <FadeInSection
                                triggerOnce={true}
                                direction="fadeLeft"
                                className="flex items-start gap-3"
                            >
                                <div className="text-blue-500 mt-1">
                                    <Users size={20} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-gray-600 text-sm font-medium">
                                        {t('global.employeesInSweden')}
                                    </h3>
                                    <p className="text-gray-800">
                                        {company.employeesSweden.toLocaleString(
                                            'sv-SE'
                                        )}
                                    </p>
                                </div>
                            </FadeInSection>
                        )}
                        {company.employeesTotal && (
                            <FadeInSection
                                triggerOnce={true}
                                direction="fadeLeft"
                                className="flex items-start gap-3"
                            >
                                <div className="text-blue-500 mt-1">
                                    <Users size={20} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-gray-600 text-sm font-medium">
                                        {t('global.employeesInternationally')}
                                    </h3>
                                    <p className="text-gray-800">
                                        {company.employeesTotal.toLocaleString(
                                            'sv-SE'
                                        )}
                                    </p>
                                </div>
                            </FadeInSection>
                        )}
                    </div>
                </div>

                <div className="flex gap-4">
                    {company.linkedIn && (
                        <FadeInSection triggerOnce={true} direction="fadeUp">
                            <a rel="nofollow" href={company.linkedIn}>
                                <Linkedin />
                            </a>
                        </FadeInSection>
                    )}
                    {company.instagram && (
                        <FadeInSection triggerOnce={true} direction="fadeUp">
                            <a rel="nofollow" href={company.instagram}>
                                <Instagram />
                            </a>
                        </FadeInSection>
                    )}
                    {company.facebook && (
                        <FadeInSection triggerOnce={true} direction="fadeUp">
                            <a rel="nofollow" href={company.facebook}>
                                <Facebook />
                            </a>
                        </FadeInSection>
                    )}
                </div>
                <FadeInSection
                    triggerOnce={true}
                    direction="fadeLeft"
                    className="w-full max-w-5xl mx-auto text-justify"
                >
                    {t(`${companyId}.description.paragraph1`)}
                </FadeInSection>
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
                    {company.contacts && company.contacts.length > 0 &&
                        company.contacts.map((contact, index) => (
                            <Contact
                                key={index}
                                name={contact.name}
                                mail={contact.mail}
                                phoneNumber={contact.phoneNumber}
                            />
                        ))}
                </div>
                <a
                    className="text-link text-2xl text-center font-bold hover:underline"
                    rel="nofollow"
                    href={company.websiteLink}
                >
                    {t('global.learnMore', { company: company.name })}
                </a>
                <div className="flex gap-4">
                    <Link
                        to="/companies"
                        className="rounded-2xl p-4 border-2 transition-all duration-100 hover:scale-105"
                    >
                        {t('global.backToCompanies')}
                    </Link>
                    <button
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                        className="rounded-2xl p-4 border-2 transition-all duration-100 hover:scale-105"
                    >
                        {t('global.scrollToTop')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CompanyPage;
