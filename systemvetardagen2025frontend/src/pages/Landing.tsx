import '../App.css';
import Countdown from '../components/Countdown/Countdown';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SignupLink from '../components/SignupLink/SignupLink';
import Partners from '../components/Partners/Partners';
import { MapPin } from 'lucide-react';
import FadeInSection from '../components/FadeInSection/FadeInSection';
import { NUM_OF_COMPANIES } from '../assets/companies';
import kpmgQR from '../assets/images/KPMGqrcode.png';
import northwaveQR from '../assets/images/Northwaveqrcode.png';
import sourcecomQR from '../assets/images/Sourcecomqrcode.png';
import ebuilderQR from '../assets/images/eBuilderqrcode.png';
import eciceronQR from '../assets/images/eCiceronqrcode.png';


export default function Landing() {
    const targetDate = '2025-03-26T16:00:00+01:00';
    const [t] = useTranslation('landing');
    const qrCodes = [
    {
        qrSrc: kpmgQR,
        linkHref: 'https://mitt.systemvetardagen.se/?exhibitor=-LVSgu9lKbWTgir5fIeZ',
        buttonText: t('body.qr-codes.buttonKPMG')
    },
    {
        qrSrc: northwaveQR,
        linkHref: 'https://mitt.systemvetardagen.se/?exhibitor=-OL7mOFFhsOa4zLpQ-h_',
        buttonText: t('body.qr-codes.buttonNORTHWAVE')
    },
    {
        qrSrc: sourcecomQR,
        linkHref: 'https://mitt.systemvetardagen.se/?exhibitor=-OL5DkXmD3RY9LyE_q48',
        buttonText: t('body.qr-codes.buttonSOURCECOM')
    },
    {
        qrSrc: ebuilderQR,
        linkHref: 'https://mitt.systemvetardagen.se/?exhibitor=-OL7mSABtS6L1XeNNS9a',
        buttonText: t('body.qr-codes.buttoneEBUILDER')
    },
    {
        qrSrc: eciceronQR,
        linkHref: 'https://mitt.systemvetardagen.se/?exhibitor=-OL5CyNSKRxUPJzmgNeB',
        buttonText: t('body.qr-codes.buttonECICERON')
    }
];

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
                        href="https://www.google.com/maps/place/DSV,+Institutionen+f%C3%B6r+data-+och+systemvetenskap/@59.4067747,17.9449852,75m/data=!3m1!1e3!4m15!1m8!3m7!1s0x465f9eedb4b0b12f:0x17108ff333fa684a!2sBorgarfjordsgatan+12,+164+55+Kista!3b1!8m2!3d59.4068103!4d17.9452287!16s%2Fg%2F11c5d8mhp9!3m5!1s0x465f9eed05efbb67:0x18ac39c13897c4a9!8m2!3d59.4067198!4d17.9452225!16s%2Fg%2F1tczcj6x?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D"
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
                <div className="w-screen px-[7vw] md:px-[15vw] lg:px-[20vw] py-[4vw] flex flex-col items-center justify-center gap-10 bg-background text-text text-center">
                    <FadeInSection direction="fadeLeft">
                        <div className="gradient-background gradient-text text-xl md:text-2xl lg:text-4xl mt-6">
                            {t('body.about')}
                        </div>
                    </FadeInSection>
                    <FadeInSection direction="fadeRight">
                        <Partners />
                    </FadeInSection>
                    <FadeInSection className="w-full h-48" direction="fadeLeft">
                        <a
                            href="/companies"
                            className="relative w-full h-full overflow-hidden rounded-3xl group"
                        >
                            <img
                                src="/images/crowded-from-above.webp"
                                alt="Crowded event"
                                className="w-full h-full object-cover rounded-3xl grayscale transition-transform duration-200 group-hover:scale-105"
                            />
                            <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl text-xs text-center lg:text-lg">
                                {t('body.meet-companies', {
                                    numberOfCompanies: NUM_OF_COMPANIES,
                                })}
                            </span>
                        </a>
                    </FadeInSection>

                    <FadeInSection direction="fadeRight">
                        <div className="bg-[#FFE6F4] flex flex-col gap-10 text-center rounded-3xl pt-8 pb-14 px-[5%] md:px-[10%] shadow-lg w-full">
                            <h1 className="text-lg md:text-xl lg:text-3xl">
                                {t('body.almost-there.header')}
                            </h1>
                            {['p1', 'p2', 'p3'].map((key) => (
                                <p key={key} className="text-base md:text-lg lg:text-xl">
                                    {t(`body.almost-there.${key}`)}
                                </p>
                            ))}
                        </div>
                    </FadeInSection>
                    <FadeInSection direction="fadeLeft" className="w-full h-48">
                        <a
                            href="/visit-info"
                            className="w-full h-full overflow-hidden relative rounded-3xl group"
                        >
                            <img
                                src="/images/auditorium-seats.webp"
                                alt=""
                                className="object-cover w-full h-full filter grayscale rounded-3xl transition-transform duration-200 group-hover:scale-105"
                            />
                            <span className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl text-xs lg:text-lg text-center">
                                {t('body.lectures')}
                            </span>
                        </a>
                    </FadeInSection>
                    <div className="flex flex-col md:flex-row gap-10 w-full">
                        {[
                            {
                                href: '/about',
                                imgSrc: '/images/crowded.webp',
                                text: t('body.read-more'),
                            },
                            {
                                href: '/visit-info',
                                imgSrc: '/images/nod.webp',
                                text: t('body.get-here'),
                            },
                        ].map((item, index) => (
                            <FadeInSection key={index} direction={index % 2 === 0 ? "fadeLeft" : "fadeRight"} className="w-full h-48">
                                <a
                                    href={item.href}
                                    className="rounded-3xl w-full h-full overflow-hidden relative group"
                                >
                                    <img
                                        src={item.imgSrc}
                                        alt=""
                                        className="object-cover w-full h-full rounded-3xl filter grayscale transition-transform duration-200 group-hover:scale-105"
                                    />
                                    <span className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl text-xs lg:text-lg text-center">
                                        {item.text}
                                    </span>
                                </a>
                            </FadeInSection>
                        ))}
                    </div>
                    <FadeInSection direction="fadeLeft" className="w-full">
                        <div className="bg-[#FFEAC9] rounded-3xl py-10 text-center items-center flex flex-col gap-10 shadow-lg w-full">
                            <h1 className="text-lg md:text-xl lg:text-3xl px-4 font-bold">
                                {t('body.tips.header')}
                            </h1>
                            <div className="w-[90%] flex flex-col gap-8 md:flex-row md:gap-0 justify-evenly">
                                {['before', 'during'].map((period) => (
                                    <FadeInSection
                                        direction="fadeUp"
                                        key={period}
                                    >
                                        <div className="flex flex-col px-6 max-w-md">
                                            <h1 className="font-bold text-center text-lg md:text-xl">
                                                {t(`body.tips.${period}.header`)}
                                            </h1>
                                            {['t1', 't2', 't3'].map((tip) => (
                                                <p
                                                    className="text-base md:text-lg mt-4 list-item text-left"
                                                    key={tip}
                                                >
                                                    {t(`body.tips.${period}.${tip}`)}
                                                </p>
                                            ))}
                                        </div>
                                    </FadeInSection>
                                ))}
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection direction="fadeLeft" className="w-full">
    <div className="bg-[#E6F4FF] rounded-3xl py-10 text-center items-center flex flex-col gap-10 shadow-lg w-full">
        <h1 className="text-lg md:text-xl lg:text-3xl px-4 font-bold">
            {t('body.qr-codes.header')}
        </h1>
        <div className="w-full px-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-5 gap-6 justify-items-center">
            {qrCodes.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-4 w-full max-w-[200px]">
                    <img 
                        src={item.qrSrc} 
                        alt={`QR Code ${index + 1}`} 
                        className="w-full aspect-square object-contain rounded-xl shadow-md"
                    />
                    <a 
                        href={item.linkHref} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <button className="bg-white border-2 border-blue-200 py-2 px-4 rounded-full text-sm font-bold w-full hover:bg-blue-50 transition-colors">
                            {item.buttonText}
                        </button>
                    </a>
                </div>
            ))}
        </div>
    </div>
</FadeInSection>
                    <FadeInSection direction="fadeLeft" className="w-full">
                        <div className="w-full">
                            <SignupLink />
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </>
    );
}
