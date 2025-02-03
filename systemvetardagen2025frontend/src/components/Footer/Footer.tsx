import { useTranslation } from 'react-i18next';

const Footer = () => {
    const [t] = useTranslation('global');
    return (
        <footer className="bg-background w-full">
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
                    <p className="text-sm">Borgarfjordsgatan 6C 164 40 Kista</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
