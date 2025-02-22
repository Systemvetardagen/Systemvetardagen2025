import { useTranslation } from 'react-i18next';
import '../App.css';
import Countdown from '../components/Countdown/Countdown';
import LanguageSwitch from '../components/LanguageSwitch/LanguageSwitch';

export default function TemporaryLanding() {
    const targetDate = '2025-03-26T16:00:00+01:00';
    const [t] = useTranslation('landing');
    return (
        <div className="h-screen w-screen gradient-background flex flex-col items-center justify-evenly font-poppins  px-4">
            <img
                className="w-[60vw] min-w-[150px] max-w-[240px]"
                src="/images/systemvetardagen-logo.webp"
                alt="Systemvetardagen Logo"
            />
            <div className='flex flex-col gap-3'>
            <h1 className="text-white text-2xl sm:text-3xl lg:text-[2vw] font-semiBold text-center">
                {t('header')} 2025
            </h1>
            <a href="https://calendar.google.com/calendar/r/eventedit?text=Systemvetardagen+2025&dates=20250326T090000Z/20250326T150000Z&details=&location=Kista+Nod,+Borgarfjordsgatan+12" target="_blank" rel="noopener noreferrer" className="text-white text-s lg:text-[1.2vw] opacity-95 hover:scale-105 transition-transform duration-100 text-center">
                {t('date.day')}, {t('date.month')} 26 10:00-16:00
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Kista+Nod,+Borgarfjordsgatan+12" target="_blank" rel="noopener noreferrer" className="text-white text-s lg:text-[1vw] font-normal opacity-90 hover:scale-105 transition-transform duration-100 text-center">
                Kista Nod, Borgarfjordsgatan 12
            </a>
            </div>

            <Countdown targetDate={targetDate} />
            <span className="text-white text-sm sm:text-base lg:text-[1.5vw] font-bold text-center">
                🪚 {t('construction')} 🪚
            </span>
                <div className="w-4/5 sm:w-2/3 lg:w-1/2 flex flex-col items-center">
                    <div className="w-full bg-gray-700 rounded-full h-4 relative">
                        <div className="bg-white/80 h-4 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <span className="text-white text-sm sm:text-base mt-2">
                        {t('body.almost-there.nearlyDone')}                    
                    </span>
                </div>


            {/* <a href="/signup">
                <button className="gradient-background-reverse shadow-xl p-4 rounded-xl text-text font-bold font-poppins mt-20">
                    Sign up for updates here!
                </button>
            </a> */}
            <div className="flex flex-col items-center gap-2">
                <a href="/signup">
                    <button className="bg-white shadow-xl p-4 rounded-full text-black font-bold font-poppins transition-transform duration-200 hover:scale-110">
                        {t('signup')}
                    </button>
                </a>
                <span className="text-white text-sm sm:text-base opacity-90 mt-4">
                    {t('body.almost-there.contactemail')} <span className="font-bold">systemvetardagen@disk.su.se</span>
                </span>
            </div>
            <span className="w-full sm:w-3/4 lg:w-3/5 text-center text-white text-xs sm:text-sm lg:text-[.8vw] font-normal">
                {t('disk')}
            </span>
            <LanguageSwitch className="absolute top-4 right-4 text-white" />
        </div>
    );
}
