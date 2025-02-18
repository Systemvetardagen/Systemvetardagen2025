import '../App.css';
import Countdown from '../components/Countdown/Countdown';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SignupLink from '../components/SignupLink/SignupLink';
import Partners from '../components/Partners/Partners';
import { MapPin } from 'lucide-react';
import FadeInSection from '../components/FadeInSection/FadeInSection';

export default function Landing() {
    const targetDate = '2025-03-26T16:00:00+01:00';
    const [t] = useTranslation('landing');
    return (
        <>
            {/* Please stop putting navbar here its globally inserted in App.tsx */}
            <div className="overflow-hidden font-poppins">
                {/* Hero */}
                <div className="h-screen max-h-[1200px] w-screen gradient-background text-white flex flex-col items-center justify-evenly py-[15vh] min-w-[351px] font-poppins tracking-wide">
                    <div className="text-center mt-8">
                        <h1 className="text-4xl fadeRight">
                            {t('sub-header')}
                        </h1>
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl mb-8 font-semibold mt-6 fadeLeft">
                            Systemvetardagen 2025
                        </h1>
                    </div>
                    <Countdown targetDate={targetDate} />
                    <a
                        target="_blank"
                        href="https://www.google.com/maps/place/Borgarfjordsgatan+12,+164+55+Kista/@59.4068103,17.9426538,17z/"
                        className="relative lg:text-[1.5vw] font-bold opacity-90 mt-8 transition-transform duration-100 hover:scale-105 fadeUp"
                    >
                        Kista Nod, Borgarfjordsgatan 12
                        <MapPin className="absolute -top-4 -right-6 rotate-45 fadeUp" />
                    </a>
                    <span className="lg:text-[1.2vw] opacity-95 fadeUp">
                        {t('date.day')}, {t('date.month')} 26 10:00-16:00
                    </span>
                    <NavLink to="/companies">
                        <button className="bg-none border-4 py-4 px-6 rounded-full text-xl font-bold mt-10 fadeDown">
                            {t('exhibitors')}
                        </button>
                    </NavLink>
                </div>
                {/* Body */}
                <div className="w-screen px-[8vw] md:px-[15vw] lg:px-[20vw] py-[4vw] flex flex-col items-center justify-center gap-10 bg-background text-text text-center">
                    <FadeInSection direction="fadeLeft">
                        <div className="gradient-background gradient-text text-xl md:text-2xl lg:text-4xl">
                            {t('body.about')}
                        </div>
                    </FadeInSection>
                    <FadeInSection direction="fadeRight">
                        <Partners />
                    </FadeInSection>
                    <a
                        href="/companies"
                        className="w-full h-[200px] overflow-hidden relative rounded-3xl group"
                    >
                        <img
                            src="/images/crowded-from-above.jpg"
                            alt=""
                            className="object-cover w-full h-full filter grayscale rounded-3xl transition-transform duration-200 group-hover:scale-105"
                        />
                        <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl text-xs lg:text-lg text-center">
                            {t('body.meet-companies', {
                                numberOfCompanies: 37,
                            })}
                        </span>
                    </a>
                    <FadeInSection direction="fadeRight">
                        <div className="bg-[#FFE6F4] flex flex-col gap-10 text-center rounded-3xl pt-8 pb-14 px-[5%] md:px-[10%] shadow-lg w-full">
                            <h1 className="text-xl lg:text-3xl ">
                                {t('body.almost-there.header')}
                            </h1>
                            {['p1', 'p2', 'p3'].map((key) => (
                                <p key={key} className="text-lg lg:text-xl">
                                    {t(`body.almost-there.${key}`)}
                                </p>
                            ))}
                        </div>
                    </FadeInSection>

                    <a
                        href="/visit-info"
                        className="w-full h-[200px] overflow-hidden relative rounded-3xl group"
                    >
                        <img
                            src="/images/auditorium-seats.jpg"
                            alt=""
                            className="object-cover w-full h-full filter grayscale rounded-3xl transition-transform duration-200 group-hover:scale-105"
                        />
                        <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl text-xs lg:text-lg text-center">
                            {t('body.lectures')}
                        </span>
                    </a>
                    <div className="flex flex-col md:flex-row gap-10 w-full">
                        {[
                            {
                                href: '/about',
                                imgSrc: '/images/crowded.jpg',
                                text: t('body.read-more'),
                            },
                            {
                                href: '/visit-info',
                                imgSrc: '/images/nod.jpg',
                                text: t('body.get-here'),
                            },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="rounded-3xl w-full h-[200px] overflow-hidden relative group"
                            >
                                <img
                                    src={item.imgSrc}
                                    alt=""
                                    className="object-cover w-full h-full rounded-3xl filter grayscale transition-transform duration-200 group-hover:scale-105"
                                />
                                <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl text-xs lg:text-lg text-center">
                                    {item.text}
                                </span>
                            </a>
                        ))}
                    </div>
                    <FadeInSection direction="fadeLeft">
                        <div className="bg-[#FFEAC9] rounded-3xl py-10 text-center items-center flex flex-col gap-10 shadow-lg w-full">
                            <h1 className="text-xl lg:text-3xl px-4 font-bold">
                                {t('body.tips.header')}
                            </h1>
                            <div className="w-[90%] flex flex-col gap-8 md:flex-row md:gap-0 justify-evenly">
                                {['before', 'during'].map((period) => (
                                    <FadeInSection
                                        direction="fadeUp"
                                        key={period}
                                    >
                                        <div className="flex flex-col px-6 max-w-md">
                                            <h1 className="font-bold text-center text-xl">
                                                {t(
                                                    `body.tips.${period}.header`
                                                )}
                                            </h1>
                                            {['t1', 't2', 't3'].map((tip) => (
                                                <p
                                                    className="text-lg mt-4 list-item text-left"
                                                    key={tip}
                                                >
                                                    {t(
                                                        `body.tips.${period}.${tip}`
                                                    )}
                                                </p>
                                            ))}
                                        </div>
                                    </FadeInSection>
                                ))}
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection direction='fadeLeft'>
                        <div className="w-full">
                            <SignupLink />
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </>
    );
}
