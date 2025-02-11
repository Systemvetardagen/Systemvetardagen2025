import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App'; // Import main App component where routes are defined

import global_en from './translations/en/global.json';
import global_se from './translations/se/global.json';
import landing_en from './translations/en/landing.json';
import landing_se from './translations/se/landing.json';
import visitInfo_en from './translations/en/visit-info.json';
import visitInfo_se from './translations/se/visit-info.json';
import about_en from './translations/en/about.json';
import about_se from './translations/se/about.json';
import companies_en from './translations/en/companies.json';
import companies_se from './translations/se/companies.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

const availableLanguages: string[] = ["en", "sv"];
const userLocale = Intl.DateTimeFormat().resolvedOptions().locale.split("-")[0];
const selectedLanguage = availableLanguages.includes(userLocale) ? userLocale : "en";
console.log(selectedLanguage);
i18next.init({
    interpolation: { escapeValue: false },
    lng: selectedLanguage,
    resources: {
        en: {
            global: global_en,
            landing: landing_en,
            visitInfo: visitInfo_en,
            about: about_en,
            companies: companies_en,
        },
        sv: {
            global: global_se,
            landing: landing_se,
            visitInfo: visitInfo_se,
            about: about_se,
            companies: companies_se,
        },
    },
});

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}

createRoot(rootElement).render(
    <StrictMode>
        <I18nextProvider i18n={i18next}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </I18nextProvider>
    </StrictMode>
);
