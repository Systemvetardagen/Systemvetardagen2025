interface Person {
    name: string;
    linkedin?: string;
    github?: string;
}
export interface Team {
    title: string;
    head: Person;
    viceHead: Person;
    teamMembers?: Person[];
}
export const teamData: Team[] = [
    {
        title: 'Project Management',
        head: {
            name: 'Karin Jäderberg Stahre',
            linkedin:
                'https://www.linkedin.com/in/karin-j%C3%A4derberg-80290b18a/',
        },
        viceHead: {
            name: 'Karin Jäderberg Stahre',
            linkedin:
                'https://www.linkedin.com/in/karin-j%C3%A4derberg-80290b18a/',
        },
    },
    {
        title: 'Web Development',
        head: {
            name: 'Jan Pakos',
            linkedin: 'https://linkedin.com/in/janesmith',
            github: 'https://www.linkedin.com/in/jan-p-b065a2127',
        },
        viceHead: {
            name: 'Daniel Mansour',
            linkedin: '',
            github: '',
        },
        teamMembers: [
            {
                name: 'Fredrik Etsare',
                linkedin:
                    'https://www.linkedin.com/in/fredrik-etsare-20a535255/',
                github: 'https://github.com/Mammamu4',
            },
            {
                name: 'Gabriel Erneving',
                linkedin:
                    'https://www.linkedin.com/in/gabriel-erneving-a96928264/',
            },
            {
                name: 'Ville Viljanen',
                linkedin: 'https://www.linkedin.com/in/ville-henrik-viljanen/',
            },
            {
                name: 'Giancarlo Valverde',
                github: 'https://github.com/klkolly',
            },
            {
                name: 'Lingyu Kong',
                linkedin:
                    'https://www.linkedin.com/in/giancarlo-valverde-340a501b4/',
                github: 'https://github.com/giancarlovalverde',
            },
        ],
    },
    {
        title: 'Marketing',
        head: {
            name: 'Prince Victor Orjiugo',
            linkedin: 'linkedin.com/in/theorjiugovictor/',
            github: 'https://github.com/theorjiugovictor',
        },
        viceHead: {
            name: 'Mohammed Aleryani',
            linkedin: 'https://www.linkedin.com/in/mohammedaleryani',
        },
        teamMembers: [
            {
                name: 'Hedda Lagerberg',
                linkedin:
                    'https://www.linkedin.com/in/hedda-lagerberg-093135323/',
            },
            {
                name: 'Joscelin Illanes',
                linkedin: 'https://www.linkedin.com/in/joscelin-illanes/',
            },
            {
                name: 'Emilia Tuvner',
                linkedin:
                    'https://www.linkedin.com/in/emilia-tuvner-a77438198/',
            },
            {
                name: 'Valentino Ionica',
                linkedin:
                    'https://www.linkedin.com/in/valentino-ionica-2baa1b238/',
            },
            {
                name: 'Rong Zeng',
            },
            {
                name: 'Alice Kempe',
                linkedin: 'https://www.linkedin.com/in/alice-kempe-a6699b348/',
            },
        ],
    },
    {
        title: 'Business relations and sales',
        head: {
            name: 'Sarah Nilsson',
            linkedin: 'http://linkedin.com/in/sarahnilssons',
        },
        viceHead: {
            name: 'Sarah Nilsson',
            linkedin: 'http://linkedin.com/in/sarahnilssons',
        },
        teamMembers: [
            {
                name: 'Linn Sundling',
                linkedin: 'https://www.linkedin.com/in/linnsundling/',
            },
            {
                name: 'Adam Lugn',
                linkedin: 'http://linkedin.com/in/adam-lugn-bb7a281a0',
            },
            {
                name: 'Simon Clavensjö',
                github: 'https://github.com/SimonClavensjo',
                linkedin: 'https://www.linkedin.com/in/simon-clavensjo',
            },
            {
                name: 'Sana Fathi',
                linkedin: 'http://linkedin.com/in/sana-fathi-364094251',
            },
            {
                name: 'Linnea Cooke',
                linkedin: 'https://www.linkedin.com/in/linnea-cooke/',
            },
        ],
    },
    {
        title: 'Logistics',
        head: {
            name: 'Hugo Wennberg',
            linkedin: 'https://www.linkedin.com/in/hugowennberg/',
        },
        viceHead: {
            name: 'Emma Lenstrup',
        },
    },
    {
        title: 'Events',
        head: {
            name: 'Emir Adar',
            linkedin: 'https://www.linkedin.com/in/emir-adar-62a5501b5/',
            github: 'https://github.com/emradar',
        },
        viceHead: {
            name: 'Kiruthika Palanikumar',
        },
        teamMembers: [],
    },
];
