import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SignupLink from '../components/SignupLink/SignupLink';
import Partners from '../components/Partners/Partners';
import companiesJSON from '../data/companies.json';
import lecturesJSON from '../data/lectures.json';
import { company } from '../structure/genstruct';

interface Lecture {
    company: string;
    time: string;
    topic: string;
}
interface LectureItemProps {
    lecture: Lecture;
}
const LectureItem: React.FC<LectureItemProps> = ({ lecture }) => {
    return (
        <div className="mb-8">
            <p className="text-md text-white font-poppins">{lecture.time}</p>
            <h1 className="font-bold text-3xl font-heading">
                {lecture.company}
            </h1>
            <p className="text-md text-white font-ibm">{lecture.topic}</p>
        </div>
    );
};

const VisitInfo: React.FC = () => {
    const [hoveredCompany, setHoveredCompany] = useState<number | null>(null);
    const [t] = useTranslation('visitInfo');
    const companyPositions: Record<number, { x: string; y: string }> = {
        19: { x: '47.5%', y: '55%' },
        22: { x: '61.5%', y: '52%' },
        45: { x: '50%', y: '45%' },
    };
    const companies: company[] = companiesJSON;
    return (
        <div className="w-screen flex flex-col items-center font-poppins bg-background text-center">
            <div className="w-full h-[20vh] lg:h-[40vh] max-h-[400px] overflow-hidden">
                <img
                    src="/images/nod.jpg"
                    alt=""
                    className="object-cover w-full h-full object-[50%_70%]"
                />
            </div>
            <h1 className="font-heading font-bold text-2xl lg:text-4xl mt-10">
                {t('header')}
            </h1>
            <p className="text-gray-500 font-light mx-8 ">{t('sub-header')}</p>
            <div className="w-[600px] max-w-[90vw] tracking-wider gradient-background flex flex-col gap-4 py-6 my-8 text-white rounded-3xl items-center">
                <h1 className="text-2xl lg:text-3xl font-light">
                    {t('lectures.header')}
                </h1>
                <h2 className="text-lg lg:text-xl w-3/4 font-light">
                    {t('lectures.sub-header')}
                </h2>
                <div className="w-5/6">
                    {lecturesJSON.map((lecture: Lecture, index) => (
                        <LectureItem key={index} lecture={lecture} />
                    ))}
                </div>
            </div>
            <div className="flex max-w-[90%] mx-auto justify-center shadow-md bg-white">
                <div className="relative flex-1">
                    <a href="/svgs/cutoffFloorPlan.svg">
                        <img
                            className="w-full h-auto"
                            src="/svgs/cutoffFloorPlan.svg"
                            alt="Floor Plan"
                        />
                    </a>
                    {hoveredCompany !== null &&
                        companyPositions[hoveredCompany] && (
                            <div
                                className="absolute w-14 h-14 bg-orange-400 opacity-80 rounded-full animate-pulse"
                                style={{
                                    top: companyPositions[hoveredCompany].y,
                                    left: companyPositions[hoveredCompany].x,
                                    transform: 'translate(-50%, -50%)',
                                }}
                            />
                        )}
                </div>

                {/* Company List */}
                <div className="flex-1 bg-white p-4 rounded-lg">
                    <ul className="grid grid-cols-2 gap-2">
                        {companies.map((company) => (
                            <li
                                key={company.id}
                                className="text-gray-700 cursor-pointer hover:text-blue-500"
                                onMouseEnter={() =>
                                    setHoveredCompany(company.id)
                                }
                                onMouseLeave={() => setHoveredCompany(null)}
                            >
                                {company.id} {company.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="px-10 max-w-[90vw] lg:max-w-[50vw] text-start my-8">
                <h1 className="font-light text-3xl mb-2">
                    {t('getting-to.header')}
                </h1>
                <div className="mb-4">
                    <h2>{t('getting-to.metro.header')}</h2>
                    <p className="text-pretty">{t('getting-to.metro.body')}</p>
                </div>
                <div className="mb-4">
                    <h2>{t('getting-to.parking.header')}</h2>
                    <p className="text-pretty">
                        {t('getting-to.parking.body')}
                    </p>
                </div>
            </div>
            <div className="mb-20 w-full flex justify-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927.2724538117486!2d17.94447928059294!3d59.40656019752912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9eed05efbb67%3A0x18ac39c13897c4a9!2sDSV%2C%20Institutionen%20f%C3%B6r%20data-%20och%20systemvetenskap!5e0!3m2!1ssv!2sse!4v1738844966811!5m2!1ssv!2sse"
                    width="100%"
                    height="500"
                    loading="lazy"
                    className="rounded-xl max-w-[90%]"
                ></iframe>
            </div>
            <Partners />
            <br />
            <br />
            <SignupLink />
            <div className="mt-[5vh]"></div>
        </div>
    );
};

export default VisitInfo;
