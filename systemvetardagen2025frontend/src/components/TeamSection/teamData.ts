interface Person {
    name: string;
    linkedIn?: string;
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
            linkedIn:
                'https://www.linkedIn.com/in/karin-j%C3%A4derberg-80290b18a/',
        },
        viceHead: {
            name: 'Karin Jäderberg Stahre',
            linkedIn:
                'https://www.linkedIn.com/in/karin-j%C3%A4derberg-80290b18a/',
        },
    },
    {
        title: 'Web Development',
        head: {
            name: 'Jan Pakos',
            linkedIn: 'https://linkedIn.com/in/janesmith',
            github: 'https://github.com/Jan-Pakos',
        },
        viceHead: {
            name: 'Daniel Mansour',
            linkedIn: '',
            github: '',
        },
        teamMembers: [
            {
                name: 'Fredrik Etsare',
                linkedIn:
                    'https://www.linkedIn.com/in/fredrik-etsare-20a535255/',
                github: 'https://github.com/Mammamu4',
            },
            {
                name: 'Gabriel Erneving',
                linkedIn:
                    'https://www.linkedIn.com/in/gabriel-erneving-a96928264/',
            },
            {
                name: 'Ville Viljanen',
                linkedIn: 'https://www.linkedIn.com/in/ville-henrik-viljanen/',
            },
            {
                name: 'Giancarlo Valverde',
                github: 'https://github.com/giancarlovalverde',
                linkedIn:
                    'https://www.linkedIn.com/in/giancarlo-valverde-340a501b4/',
            },
            {
                name: 'Lingyu Kong',
                linkedIn:
                    'https://www.linkedin.com/in/lingyu-kong-c0destudent/',
                github: 'https://github.com/klkolly',
            },
        ],
    },
    {
        title: 'Marketing',
        head: {
            name: 'Prince Victor Orjiugo',
            linkedIn: 'linkedIn.com/in/theorjiugovictor/',
            github: 'https://github.com/theorjiugovictor',
        },
        viceHead: {
            name: 'Mohammed Aleryani',
            linkedIn: 'https://www.linkedIn.com/in/mohammedaleryani',
        },
        teamMembers: [
            {
                name: 'Hedda Lagerberg',
                linkedIn:
                    'https://www.linkedIn.com/in/hedda-lagerberg-093135323/',
            },
            {
                name: 'Joscelin Illanes',
                linkedIn: 'https://www.linkedIn.com/in/joscelin-illanes/',
            },
            {
                name: 'Emilia Tuvner',
                linkedIn:
                    'https://www.linkedIn.com/in/emilia-tuvner-a77438198/',
            },
            {
                name: 'Valentino Ionica',
                linkedIn:
                    'https://www.linkedIn.com/in/valentino-ionica-2baa1b238/',
            },
            {
                name: 'Rong Zeng',
            },
            {
                name: 'Alice Kempe',
                linkedIn: 'https://www.linkedIn.com/in/alice-kempe-a6699b348/',
            },
        ],
    },
    {
        title: 'Business relations and sales',
        head: {
            name: 'Sarah Nilsson',
            linkedIn: 'http://linkedIn.com/in/sarahnilssons',
        },
        viceHead: {
            name: 'Sarah Nilsson',
            linkedIn: 'http://linkedIn.com/in/sarahnilssons',
        },
        teamMembers: [
            {
                name: 'Linn Sundling',
                linkedIn: 'https://www.linkedIn.com/in/linnsundling/',
            },
            {
                name: 'Adam Lugn',
                linkedIn: 'http://linkedIn.com/in/adam-lugn-bb7a281a0',
            },
            {
                name: 'Simon Clavensjö',
                github: 'https://github.com/SimonClavensjo',
                linkedIn: 'https://www.linkedIn.com/in/simon-clavensjo',
            },
            {
                name: 'Sana Fathi',
                linkedIn: 'http://linkedIn.com/in/sana-fathi-364094251',
            },
            {
                name: 'Linnea Cooke',
                linkedIn: 'https://www.linkedIn.com/in/linnea-cooke/',
            },
        ],
    },
    {
        title: 'Logistics',
        head: {
            name: 'Hugo Wennberg',
            linkedIn: 'https://www.linkedIn.com/in/hugowennberg/',
        },
        viceHead: {
            name: 'Emma Lenstrup',
        },
    },
    {
        title: 'Events',
        head: {
            name: 'Emir Adar',
            linkedIn: 'https://www.linkedIn.com/in/emir-adar-62a5501b5/',
            github: 'https://github.com/emradar',
        },
        viceHead: {
            name: 'Kiruthika Palanikumar',
        },
        teamMembers: [],
    },
];
