import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

type Direction = 'fadeUp' | 'fadeDown' | 'fadeRight' | 'fadeLeft';

interface FadeInSectionProps {
    children: ReactNode;
    direction: Direction;
    className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, direction, className }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    
    return (
        <div ref={ref} className={`opacity-0 ${className} ${inView ?  `opacity-100 ${direction}` : ''}`}>
            {children}
        </div>
    );
};

export default FadeInSection;
