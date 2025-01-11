import { useTranslation } from 'react-i18next';
import '../App.css';
import Countdown from '../components/Countdown/Countdown';
import LanguageSwitch from '../components/LanguageSwitch/LanguageSwitch';

export default function TemporaryLanding() {
    const targetDate = '2025-03-26T16:00:00+01:00';
    const [t, i18n] = useTranslation('landing');
    return (
        <div className="h-screen w-screen gradient-background flex flex-col items-center pt-[10vh] px-4">
            <img
                className="w-[60vw] min-w-[150px] max-w-[240px]"
                src="/images/systemvetardagen-logo.png"
                alt="Systemvetardagen Logo"
            />
            <h1 className="text-white text-2xl sm:text-3xl lg:text-[2vw] mb-8 font-semiBold mt-6 text-center">
                {t('header')} 2025
            </h1>
            <span className="text-white text-sm sm:text-base lg:text-[1.2vw] opacity-95 text-center">
                {t('date.day')}, {t('date.month')} 26 10:00-16:00
            </span>
            <span className="text-white text-xs sm:text-sm lg:text-[1vw] font-normal opacity-90 mt-2 mb-8 text-center">
                Kista Nod, Borgarfjordsgatan 12
            </span>
            <Countdown targetDate={targetDate} />
            <span className="text-white text-sm sm:text-base lg:text-[1.5vw] font-bold mt-10 text-center">
                🪚 {t('construction')} 🪚
            </span>
            {/* <a href="/signup">
                <button className="gradient-background-reverse shadow-xl p-4 rounded-xl text-text font-bold font-poppins mt-20">
                    Sign up for updates here!
                </button>
            </a> */}
            {/* <a href="/signup" className="">
                <button className="bg-white shadow-xl p-4 rounded-full text-black font-bold font-poppins mt-20 transition-transform duration-200 hover:scale-110">
                    {t('signup')}
                </button>
            </a> */}
            <span className="w-full sm:w-3/4 lg:w-3/5 text-center text-white text-xs sm:text-sm lg:text-[.8vw] font-normal mt-auto mb-6">
                {t('disk')}
            </span>
            <LanguageSwitch className='absolute top-8 right-8'/>
        </div>
    );
}
