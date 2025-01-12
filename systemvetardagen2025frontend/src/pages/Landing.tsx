import '../App.css';
import Countdown from '../components/Countdown/Countdown';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Landing() {
    const targetDate = '2025-03-26T16:00:00+01:00';
    const [t, i18n] = useTranslation('landing');
    return (
        <div className="overflow-hidden">
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
            <div className="h-[200vh] text-9xl bg-primary">
                <p>Mer Systemvetardagen info</p>
                <p>Mer Systemvetardagen info</p>
                <p>Mer Systemvetardagen info</p>
                <p>Mer Systemvetardagen info</p>
                <p>Mer Systemvetardagen info</p>
            </div>
        </div>
    );
}
