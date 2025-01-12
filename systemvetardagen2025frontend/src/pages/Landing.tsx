import '../App.css';
import Countdown from '../components/Countdown/Countdown';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer/Footer';

const partners = [
    { alt: 'Accenture logo', src: '/companies/accenture-logo.png' },
    { alt: 'Accenture logo', src: '/companies/accenture-logo.png' },
    { alt: 'Accenture logo', src: '/companies/accenture-logo.png' },
    { alt: 'Accenture logo', src: '/companies/accenture-logo.png' },
];

export default function Landing() {
    const targetDate = '2025-03-26T16:00:00+01:00';
    const [t] = useTranslation('landing');
    return (
        <div className="overflow-hidden font-poppins">
            {/*Hero*/}
            <div
                className="h-screen w-screen gradient-background text-white
                        flex flex-col items-center pt-[20vh] min-w-[351px] font-poppins tracking-wide"
            >
                <h1 className="text-4xl">{t('sub-header')}</h1>
                <h1 className="text-2xl sm:text-3xl lg:text-[2vw] mb-8 font-semiBold mt-6 text-center">
                    {t('header')} 2025
                </h1>
                <Countdown targetDate={targetDate} />
                <span className="lg:text-[1.5vw] font-bold opacity-90 mt-8">
                    Kista Nod, Borgarfjordsgatan 12
                </span>
                <span className="lg:text-[1.2vw] opacity-95">
                    {t('date.day')}, {t('date.month')} 26 10:00-16:00
                </span>
                <span className="lg:text-[1.2vw] opacity-95">
                    10:00 - 16:00
                </span>
                <NavLink to="/signup">
                    <button className="bg-none border-2 py-4 px-6 rounded-full text-xl font-bold  mt-16 transition-transform duration-200 hover:scale-110">
                        {t('exhibitors')}
                    </button>
                </NavLink>
            </div>
            {/*Body*/}
            <div className="w-screen flex flex-col items-center bg-background text-text">
                <div className="px-[7vw] py-[4vw] gradient-background gradient-text text-3xl lg:text-7xl text-center">
                    {t('body.about')}
                </div>
                <div className="px-[7vw] flex flex-col items-center gap-14">
                    <h2 className="text-xl lg:text-3xl">
                        {t('body.partners')}
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {partners.map((partner, index) => (
                            <img
                                className="h-16"
                                key={index}
                                src={partner.src}
                                alt={partner.alt}
                            />
                        ))}
                    </div>
                </div>
                <a
                    href="/companies"
                    className="w-full lg:px-[7vw] h-[20vh] lg:h-[35vh] overflow-hidden relative mt-20"
                >
                    <img
                        src="/images/crowded-from-above.jpg"
                        alt=""
                        className="object-cover w-full h-full filter grayscale lg:rounded-3xl"
                    />
                    <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl text-sm lg:text-xl text-center">
                        {t('body.meet-companies', { numberOfCompanies: 37 })}
                    </span>
                </a>
                <div className="bg-[#FFE6F4] mx-[7vw] my-[7vh] flex flex-col gap-10 text-center rounded-3xl pt-8 pb-14 px-[5%] md:px-[10%] lg:px-[25%]">
                    <h1 className="text-2xl lg:text-4xl font-normal">
                        {t('body.almost-there.header')}
                    </h1>
                    {['p1', 'p2', 'p3'].map((key) => (
                        <p key={key} className="text-xl lg:text-2xl">
                            {t(`body.almost-there.${key}`)}
                        </p>
                    ))}
                </div>

                <a
                    href="/visit-info"
                    className="w-full lg:px-[7vw] h-[20vh] lg:h-[35vh] overflow-hidden relative"
                >
                    <img
                        src="/images/auditorium-seats.jpg"
                        alt=""
                        className="object-cover w-full h-full filter grayscale lg:rounded-3xl"
                    />
                    <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl text-sm lg:text-xl text-center">
                        {t('body.lectures')}
                    </span>
                </a>
                <div className="flex flex-col lg:flex-row mt-16 gap-16 px-[7vw] w-full">
                    {[
                        {
                            href: '/about',
                            imgSrc: '/images/crowded.jpg',
                            text: 'Läs mer om Systemvetardagen',
                        },
                        {
                            href: '/about',
                            imgSrc: '/images/crowded.jpg',
                            text: 'Lorem Impsum',
                        },
                        {
                            href: '/about',
                            imgSrc: '/images/nod.jpg',
                            text: 'Hitta hit',
                        },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="w-full h-[20vh] lg:h-[35vh] overflow-hidden relative"
                        >
                            <img
                                src={item.imgSrc}
                                alt=""
                                className="object-cover w-full h-full filter grayscale rounded-3xl"
                            />
                            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl text-sm lg:text-xl text-center">
                                {item.text}
                            </span>
                        </a>
                    ))}
                </div>

                <div className="mx-[7vw] mt-16 bg-[#FFEAC9] rounded-3xl py-10 text-center flex flex-col gap-10">
                    <h1 className="text-2xl lg:text-4xl px-4 font-bold">
                        {t('body.tips.header')}
                    </h1>
                    <div className="w-full flex flex-col gap-8 lg:flex-row">
                        {['before', 'during'].map((period) => (
                            <div
                                className="flex flex-col text-center px-10"
                                key={period}
                            >
                                <h1 className="font-bold text-2xl">
                                    {t(`body.tips.${period}.header`)}
                                </h1>
                                {['t1', 't2', 't3'].map((tip) => (
                                    <p className="text-xl mt-4" key={tip}>
                                        {t(`body.tips.${period}.${tip}`)}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mx-[7vw] my-16 bg-[#E5E8FF] rounded-3xl py-10 flex flex-col items-center gap-10">
                    <h1 className="text-2xl lg:text-4xl">
                        {t('body.uppdated.header')}
                    </h1>
                    <p className="w-3/4 text-xl text-center">
                        {t('body.uppdated.body')}
                    </p>
                    <NavLink to="/signup">
                        <button className="bg-white py-4 px-6 rounded-full text-xl transition-transform duration-200 hover:scale-110">
                            {t('body.uppdated.button')}
                        </button>
                    </NavLink>
                </div>
            </div>
            <Footer />
        </div>
    );
}
