export interface Company {
    id: string;
    name: string;
    slogan?: string;
    video?: string;
    founded: number;
    employeesSweden?: number;
    employeesTotal?: number;
    contacts?: Contact[];
    candidatePrograms?: string[];
    masterPrograms?: string[];
    positions?: string[];
    isPartner?: boolean;
    websiteLink: string;
    linkedIn?: string;
    instagram?: string;
    facebook?: string;
}
export interface Contact {
    name?: string;
    mail?: string;
    phoneNumber?: string;
}

import companiesData from "./companies.json";
export const NUM_OF_COMPANIES = companiesData.length;

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
