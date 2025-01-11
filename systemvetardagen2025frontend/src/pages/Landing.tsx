import '../App.css';
import Countdown from '../components/Countdown/Countdown';
import { NavLink } from 'react-router-dom';

export default function Landing() {
    const targetDate = '2025-03-26T16:00:00+01:00';
    return (
        <div className='overflow-hidden'>
            <div
                className="h-screen w-screen gradient-background 
                        flex flex-col items-center pt-[20vh] min-w-[351px] font-poppins tracking-wide"
            >
                <h1 className="text-text text-4xl">Välkommen till</h1>
                <h1 className="text-text text-3xl lg:text-[4vw] min-w-[375px] font-semiBold mt-8 mb-16">
                    Systemvetardagen
                </h1>
                <Countdown targetDate={targetDate} />
                <span className="text-white lg:text-[1.5vw] font-bold opacity-90 mt-16">
                    Kista Nod, Borgarfjordsgatan 12
                </span>
                <span className="text-white lg:text-[1.2vw] opacity-95">
                    Onsdag 26 Mars 2025
                </span>
                <span className="text-white lg:text-[1.2vw] opacity-95">
                    10:00 - 16:00
                </span>
                <NavLink to="/companies">
                    <button className="bg-white rounded-3xl p-5 mt-20 font-bold">
                        Se alla företag
                    </button>
                </NavLink>
            </div>
            <div className='h-[200vh] text-9xl bg-primary'>
                <p>Mer Systemvetardagen info</p>
                <p>Mer Systemvetardagen info</p>
                <p>Mer Systemvetardagen info</p>
                <p>Mer Systemvetardagen info</p>
                <p>Mer Systemvetardagen info</p>
            </div>
        </div>
    );
}
