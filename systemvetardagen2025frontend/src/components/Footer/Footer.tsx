import { useTranslation } from 'react-i18next';

const Footer = () => {
    const [t] = useTranslation('global');
    return (
        <footer className="bg-white w-full">
            <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            <div className="container mx-auto flex justify-evenly items-center px-4 py-6">
                <div className="flex gap-6">
                    <a
                        href="https://www.facebook.com/Systemvetardagen/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/svgs/facebook.svg" alt="facebook logo" />
                    </a>
                    <a
                        href="https://www.instagram.com/systemvetardagen/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/svgs/instagram.svg" alt="instagram logo" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/systemvetardagen/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/svgs/linkedin.svg" alt="linkedin logo" />
                    </a>
                </div>
                <div className="text-center text-gray-600">
                    <a href='https://disk.su.se/' className="text-sm">{t('disk')}</a>
                    <p className="text-sm">
                        <a href="https://www.google.com/maps/place/DSV,+Institutionen+f%C3%B6r+data-+och+systemvetenskap/@59.4068103,17.9426538,543m/data=!3m1!1e3!4m15!1m8!3m7!1s0x465f9eedb4b0b12f:0x17108ff333fa684a!2sBorgarfjordsgatan+12,+164+55+Kista!3b1!8m2!3d59.4068103!4d17.9452287!16s%2Fg%2F11c5d8mhp9!3m5!1s0x465f9eed05efbb67:0x18ac39c13897c4a9!8m2!3d59.4067198!4d17.9452225!16s%2Fg%2F1tczcj6x?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                            Borgarfjordsgatan 12 164 40 Kista
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
