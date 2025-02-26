import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

type Direction = 'fadeUp' | 'fadeDown' | 'fadeRight' | 'fadeLeft';

interface FadeInSectionProps {
    children: ReactNode;
    direction: Direction;
    className?: string;
    triggerOnce?: boolean;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
    children,
    direction,
    className,
    triggerOnce,
}) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: triggerOnce,
    });

    return (
        <div
            ref={ref}
            className={`opacity-0 ${className} ${
                inView ? `opacity-100 ${direction}` : ''
            }`}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
