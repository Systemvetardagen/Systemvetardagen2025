import '../App.css';

export default function TemporaryLanding() {
    return (
        <div
            className="h-screen w-screen bg-[linear-gradient(15deg,_theme(colors.gradientFirst),_theme(colors.gradientSecond),_theme(colors.gradientThird))]
                        flex flex-col items-center pt-[10vh] min-w-[351px]"
        >
            <img
                className=" w-[50vw] min-w-[190px] max-w-[240px]"
                src="/images/systemvetardagen-logo.png"
            />
            <h1 className="text-white text-3xl lg:text-[2.5vw] font-black mt-8 ">
                Systemvetardagen 2025
            </h1>
            <span className="text-white lg:text-[1.2vw] opacity-95">
                Wednesday, March 26 10:00-16:00
            </span>
            <span className="text-white lg:text-[1vw] font-normal opacity-90 mt-2">
                Kista Nod, Borgarfjordsgatan 12
            </span>
            <span className="text-white lg:text-[1.5vw] font-black my-[2em]">
                🪚 Site under construction 🪚
            </span>
            <span className="text-white lg:text-[1vw] font-normal">
                Want to take a look at last year's event?
            </span>
            <button className="lg:text-[1.2vw] text-xs sm:text-md max-w-[80vw] min-w-[350px] mt-4 bg-white p-2 px-20 rounded-full transform transition-all hover:scale-[102%]">
                <a href="https://systemvetardagen.se/blog/systemvetardagen-2024">
                    Go to Systemvetardagen 2024
                </a>
            </button>

            <span className="w-3/5 text-center text-white text-xs lg:text-[.8vw] font-normal my-auto">
                Systemvetardagen is organized by the Student Union DISK <br />
                at the Department of Computer and Systems Sciences at Stockholm
                University
            </span>
        </div>
    );
}