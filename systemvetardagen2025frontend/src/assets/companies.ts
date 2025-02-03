export interface Company {
    id: string;
    name: string;
    logo: string;
    banner?: string;
    video?: string;
    founded: number;
    employeesSweden?: number;
    employeesTotal?: number;
    contacts: Contact[];
    candidatePrograms: string[];
    masterPrograms: string[];
    positions: string[];
    isPartner?: boolean;
    websiteLink: string;
}
export interface Contact {
    name: string;
    mail?: string;
    phoneNumber?: string;
}

export const candidatePrograms = [
    'SYSDK', // Computer and Systems Sciences
    'SAFFK', // Enterprise Systems and Service Design
    'SDAVK', // Computer Science and Software Engineering
    'SGAMK', // Computer Game Development
    'SDIMK', // Digital media
    'SITEK', // Business Administration and Informaton Technology
    'SIADK', // Interaction Design
    'SMARK', // Market Communication and Information Technology
];
export const masterPrograms = [
    'SAIHO', // AI for health
    'SMINO', // Information Security
    'SMEFO', // Open eGovernment
    'SCSSO', // Computer and Systems Sciences
    'SHINO', // Health Informatics
    'SSLIO', // Strategic Information Systems Management
    'SDSBO', // Data Science, Statistics and Decision Analysis
    'SPROM', // IT Project Management
    'SDKIO', // Design for Creative and Immersive Technology
];
export const positions = [
    'fullTime',
    'partTime',
    'thesis',
    'trainee',
    'internship',
    'foreignServices',
];

export const companies: Company[] = [
    {
        id: 'cygni',
        name: 'Cygni',
        logo: '/companies/Cygni/logo.png',
        banner: '/companies/Cygni/banner.jpeg',
        video: '/companies/Cygni/placeholder-video.mp4',
        founded: 2006,
        employeesSweden: 240,
        employeesTotal: 240,
        isPartner: true,
        websiteLink: "https://cygni.se/",
        contacts: [
            {
                name: 'Pia Hellquist',
                mail: 'pia.hellquist@cygni.se',
                phoneNumber: '0725552373',
            },
            {
                name: 'Pia Hellquist',
                mail: 'pia.hellquist@cygni.se',
                phoneNumber: '0725552373',
            },
            {
                name: 'Pia Hellquist',
                mail: 'pia.hellquist@cygni.se',
                phoneNumber: '0725552373',
            },
        ],
        candidatePrograms: ['SYSDK', 'SAFFK', 'SMARK'],
        masterPrograms: ['SDKIO'],
        positions: ['fullTime', 'partTime', 'thesis'],
    },
    {
        id: 'accenture',
        name: 'Accenture',
        logo: '/companies/Accenture/accenture-logo.png',
        banner: '/companies/Accenture/accenture-banner.png',
        video: '/companies/Cygni/placeholder-video.mp4',
        founded: 2001,
        employeesSweden: 1600,
        employeesTotal: 740000,
        isPartner: true,
        websiteLink: "https://www.accenture.com/",
        contacts: [
            {
                name: 'Pia Hellquist',
                mail: 'pia.hellquist@cygni.se',
                phoneNumber: '0725552373',
            },
            {
                name: 'Pia Hellquist',
                mail: 'pia.hellquist@cygni.se',
                phoneNumber: '0725552373',
            },
            {
                name: 'Pia Hellquist',
                mail: 'pia.hellquist@cygni.se',
                phoneNumber: '0725552373',
            },
        ],
        candidatePrograms: ['SDIMK'],
        masterPrograms: ['SHINO'],
        positions: ['trainee'],
    },
    {
        id: 'handelsbanken',
        name: 'Handelsbanken',
        logo: '/companies/Handelsbanken/handelsbanken-logo.svg',
        banner: '/companies/Handelsbanken/handelsbanken-banner.png',
        video: '/companies/Cygni/placeholder-video.mp4',
        founded: 1871,
        employeesSweden: 8000,
        employeesTotal: 12000,
        isPartner: false,
        websiteLink: "https://www.handelsbanken.se/sv/om-oss/jobba-hos-oss/tech-data-innovation",
        contacts: [
            {
                name: 'Rebecka Kjellström',
                mail: 'rebecka.kjellstrom@handelsbanken.se',
                phoneNumber: '+46 (0)730315596',
            }
        ],
        candidatePrograms: ['SYSDK', 'SDAVK', 'SITEK', 'SMARK', 'SAFFK'],
        masterPrograms: ['SAIHO', 'SDSBO', 'SCSSO', 'SMINO', 'SSLIO', 'SMEFO', 'SDKIO', 'SHINO'],
        positions: ['fullTime', 'trainee', 'partTime', 'internship'],
    },
    {
        id: 'ericsson',
        name: 'Ericsson',
        logo: '/companies/Ericsson/ericsson-logo.png',
        banner: '/companies/Ericsson/ericsson-banner.png',
        video: '/companies/Cygni/placeholder-video.mp4',
        founded: 1876,
        employeesSweden: 14500,
        employeesTotal: 105000,
        isPartner: false,
        websiteLink: "https://www.ericsson.com/en/careers",
        contacts: [
            {
                name: 'Ida Ellingsson',
                mail: 'ida.ellingsson@ericsson.com'
            }
        ],
        candidatePrograms: ['SDAVK', 'SYSDK', 'SITEK', 'SIADK', 'SMARK'],
        masterPrograms: ['SAIHO', 'SDSBO', 'SCSSO', 'SDKIO', 'SHINO', 'SMINO', 'SSLIO'],
        positions: ['fullTime', 'partTime', 'thesis', 'trainee', 'internship'],
    },
];
