export interface Company {
    id: string;
    name: string;
    logo: string;
    banner?: string;
    video?: string;
    founded: number;
    employeesSweden?: number;
    employeesTotal?: number;
}

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
    },
];
