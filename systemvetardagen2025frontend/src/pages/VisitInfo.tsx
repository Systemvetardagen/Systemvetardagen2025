import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer/Footer';
import Partners from '../components/Partners/Partners';
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
    const [t] = useTranslation('visitInfo');
    return (
        <div className="w-screen flex flex-col items-center font-poppins bg-background text-center">
            <div className="w-full h-[20vh] lg:h-[40vh] overflow-hidden relative">
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
                    {lectures.map((lecture: Lecture, index) => (
                        <LectureItem key={index} lecture={lecture} />
                    ))}
                </div>
            </div>
            <img className="px-20 my-10" src="/svgs/floormap.svg" alt="" />
            <div className="w-[500px] max-w-[90wv] text-start my-8">
                <h1 className="font-light text-3xl mb-2">
                    {t('getting-to.header')}
                </h1>
                <div className="mb-4">
                    <h2>{t('getting-to.metro.header')}</h2>
                    <p>{t('getting-to.metro.body')}</p>
                </div>
                <div className="mb-4">
                    <h2>{t('getting-to.parking.header')}</h2>
                    <p>{t('getting-to.parking.body')}</p>
                </div>
            </div>
            <h2 className="my-32">Google maps embed here</h2>
            <Partners />
            <Footer />
        </div>
    );
};

export default VisitInfo;
