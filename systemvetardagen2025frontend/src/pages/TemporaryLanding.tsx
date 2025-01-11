import '../App.css';
import Countdown from '../components/Countdown/Countdown';

export default function TemporaryLanding() {
    const targetDate = '2025-03-26T16:00:00+01:00';
    return (
        <div className="h-screen w-screen gradient-background flex flex-col items-center pt-[10vh] px-4">
            <img
                className="w-[60vw] min-w-[150px] max-w-[240px]"
                src="/images/systemvetardagen-logo.png"
                alt="Systemvetardagen Logo"
            />
            <h1 className="text-white text-2xl sm:text-3xl lg:text-[2vw] mb-6 font-semiBold mt-6 text-center">
                Systemvetardagen 2025
            </h1>
            <span className="text-white text-sm sm:text-base lg:text-[1.2vw] opacity-95 text-center">
                Wednesday, March 26 10:00-16:00
            </span>
            <span className="text-white text-xs sm:text-sm lg:text-[1vw] font-normal opacity-90 mt-2 mb-4 text-center">
                Kista Nod, Borgarfjordsgatan 12
            </span>
            <Countdown targetDate={targetDate} />
            <span className="text-white text-sm sm:text-base lg:text-[1.5vw] font-bold my-6 text-center">
                🪚 Site under construction 🪚
            </span>
            <span className="w-full sm:w-3/4 lg:w-3/5 text-center text-white text-xs sm:text-sm lg:text-[.8vw] font-normal mt-auto mb-6">
                Systemvetardagen is organized by the Student Union DISK <br />
                at the Department of Computer and Systems Sciences at Stockholm
                University
            </span>
        </div>
    );
}
