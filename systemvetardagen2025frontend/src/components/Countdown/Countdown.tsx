import React, { useState, useEffect } from 'react';
import Timeunit from './Timeunit';
import '../../App.css';
import { useTranslation } from 'react-i18next';

interface CountdownProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [t, i18n] = useTranslation('landing');
    function calculateTimeLeft(): TimeLeft | null {
        const difference =
            new Date(targetDate).getTime() - new Date().getTime();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return null;
    }

    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
        calculateTimeLeft()
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);
    if (!timeLeft) {
        return <div>Systemvetardagen is happening now!</div>;
    }
    return (
        <div className="grid gap-4 lg:flex lg:gap-24 grid-cols-2">
            <Timeunit value={timeLeft.days} label={t("days")} />
            <Timeunit value={timeLeft.hours} label={t("hours")} />
            <Timeunit value={timeLeft.minutes} label={t("minutes")} />
            <Timeunit value={timeLeft.seconds} label={t("seconds")} />
        </div>
    );
};

export default Countdown;
