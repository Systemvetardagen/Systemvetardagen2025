import React from 'react';
import { useTranslation } from 'react-i18next';

const lectures = [
    {
        company: 'Akavia',
        time: '10:20-10:50',
        topic: 'Arbetsmarknaden för nyexaminerade IT-akademiker',
    },
    {
        company: 'Truesec',
        time: '11:00-11:40',
        topic: 'From Infection to Encryption: A Deep Dive into Threat Actors Malicious Code',
    },
    {
        company: 'Accenture',
        time: '12:00-12:30',
        topic: 'About the company and intership programs',
    },
    {
        company: 'Zimply',
        time: '13:00-13:30',
        topic: 'Om AI och hur det är att jobba på Zimply + intervju med två anställda rekryterade från Systemvetardagen',
    },
    {
        company: 'Google',
        time: '14:00-15:00',
        topic: 'Generativ AI - LLMs and all that jazz',
    },
];

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
        <div className="p-2">
            <h1 className="font-bold text-2xl">{lecture.company}</h1>
            <p className="text-md text-black">{lecture.time}</p>
            <p className="text-black">{lecture.topic}</p>
        </div>
    );
};

const VisitInfo: React.FC = () => {
    const [t] = useTranslation('visitInfo');
    return (
        <div className="w-screen flex flex-col items-center font-poppins bg-background text-center">
            <div className="w-full h-[20vh] lg:h-[40vh] overflow-hidden relative">
                <img
                    src="/images/nod.jpg"
                    alt=""
                    className="object-cover w-full h-full filter grayscale object-[50%_70%]"
                />
            </div>

            <h1 className="font-heading font-bold text-2xl lg:text-4xl mt-10">
                {t('header')}
            </h1>
            <p className="text-gray-500 font-light w-1/2 md:w-1/4">
                {t('sub-header')}
            </p>

            <div className="gradient-background flex flex-col gap-4 py-6 m-10 text-white rounded-3xl items-center">
                <h1 className="text-xl lg:text-3xl font-light">{t('lectures.header')}</h1>
                <h2 className="text-lg lg:text-xl w-3/4 font-light">
                    {t('lectures.sub-header')}
                </h2>
                <div className="w-3/4 lg:w-1/2">
                    {lectures.map((lecture: Lecture, index) => (
                        <LectureItem key={index} lecture={lecture} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VisitInfo;
