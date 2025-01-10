import React from 'react';
import '../../App.css';

interface TimeUnitProps {
    value: number;
    label: string;
}

const Timeunit: React.FC<TimeUnitProps> = ({ value, label }) => {
    return (
        <div className="font-bold flex flex-col items-center text-text font-poppins">
            <div className="text-4xl lg:text-7xl">
                {value.toString().padStart(2, '0')}{' '}
            </div>
            <div className="text-2xl lg:text-2xl">{label}</div>
        </div>
    );
};

export default Timeunit;