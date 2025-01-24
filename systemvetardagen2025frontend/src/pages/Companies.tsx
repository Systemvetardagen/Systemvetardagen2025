import React from 'react';
import { companies } from '../assets/companies';

const Companies: React.FC = () => {
    //work in progress
    return (
        <div className="min-h-screen flex items-center justify-center">
            {companies.map((company, index) => (
                <div className="" key={index}>
                    <a className='text-4xl text-link' href={`/companies/${company.name.toLowerCase()}`}>{company.name}</a>
                </div>
            ))}
        </div>
    );
};

export default Companies;
