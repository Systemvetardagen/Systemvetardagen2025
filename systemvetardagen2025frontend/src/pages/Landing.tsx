import '../App.css';
import Countdown from '../components/Countdown/Countdown';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer/Footer';
import Partners from '../components/Partners/Partners';

export default function Landing() {
    const targetDate = '2025-03-26T16:00:00+01:00';
    const [t] = useTranslation('landing');
    return (
        <div className="overflow-hidden font-poppins">
            {/*Hero*/}
            <div
                className="h-screen w-screen gradient-background text-white
                        flex flex-col items-center justify-evenly py-[20vh] gap-4 min-w-[351px] font-poppins tracking-wide"
            >
                <h1 className="text-4xl">{t('sub-header')}</h1>
                <h1 className="text-2xl sm:text-3xl lg:text-[3vw] mb-8 font-semiBold mt-6 text-center">
                    Systemvetardagen 2025
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
                <NavLink to="/companies">
                    <button className="bg-none border-2 py-4 px-6 rounded-full text-xl font-bold  transition-transform duration-200 hover:scale-110">
                        {t('exhibitors')}
                    </button>
                </NavLink>
            </div>
            {/*Body*/}
            <div className="w-screen flex flex-col items-center bg-background text-text text-center">
                <div className="px-[8vw] lg:px-[18vw] py-[4vw] gradient-background gradient-text text-2xl md:text-3xl lg:text-5xl">
                    {t('body.about')}
                </div>
                <Partners />
                <a
                    href="/companies"
                    className="w-full lg:px-[14vw] h-[25vh] lg:h-[35vh] overflow-hidden relative mt-20"
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
                <div className="bg-[#FFE6F4] mx-[8vw] lg:mx-[14vw] my-[7vh] flex flex-col gap-10 text-center rounded-3xl pt-8 pb-14 px-[5%] md:px-[10%]">
                    <h1 className="text-2xl lg:text-4xl ">
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
                    className="w-full lg:px-[14vw] h-[25vh] lg:h-[35vh] overflow-hidden relative"
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
                <div className="flex flex-col md:flex-row mt-8 gap-8 px-[8vw] lg:px-[14vw] w-full">
                    {[
                        {
                            href: '/about',
                            imgSrc: '/images/crowded.jpg',
                            text: 'Läs mer om Systemvetardagen',
                        },
                        {
                            href: '/signup',
                            imgSrc: '/images/crowded.jpg',
                            text: 'Newsletter',
                        },
                        {
                            href: '/visit-info',
                            imgSrc: '/images/nod.jpg',
                            text: 'Hitta hit',
                        },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="rounded-3xl w-full h-[20vh] lg:h-[35vh] overflow-hidden relative"
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

                <div className="mx-[8vw] lg:mx-[14vw] mt-16 bg-[#FFEAC9] rounded-3xl py-10 text-center flex flex-col gap-10">
                    <h1 className="text-2xl lg:text-4xl px-4 font-bold">
                        {t('body.tips.header')}
                    </h1>
                    <div className="w-full flex flex-col gap-8 lg:flex-row">
                        {['before', 'during'].map((period) => (
                            <div
                                className="flex flex-col px-10 md:px-20 lg:px-30"
                                key={period}
                            >
                                <h1 className="font-bold text-center text-2xl">
                                    {t(`body.tips.${period}.header`)}
                                </h1>
                                {['t1', 't2', 't3'].map((tip) => (
                                    <li className="text-xl mt-4 text-left list-disc" key={tip}>
                                        {t(`body.tips.${period}.${tip}`)}
                                    </li>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mx-[8vw] lg:mx-[14vw] my-16 bg-[#E5E8FF] rounded-3xl py-10 flex flex-col items-center gap-10">
                    <h1 className="text-2xl lg:text-4xl px-2">
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
