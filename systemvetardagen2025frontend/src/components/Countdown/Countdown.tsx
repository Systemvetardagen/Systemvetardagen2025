import React, { useState, useEffect, useRef } from 'react';
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
    const [clickAmount, setClickAmount] = useState<number>(0);
    const [t, i18n] = useTranslation('landing');

    const acceleratedOffsetRef = useRef<number>(0);

    function calculateTimeLeft(currentTimeMillis?: number): TimeLeft | null {
        const now = currentTimeMillis ?? new Date().getTime();
        const targetTime = new Date(targetDate).getTime();
        const difference = targetTime - now;
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return null;
    }

    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

    useEffect(() => {
        const tickInterval = 50;
        const timer = setInterval(() => {
            const multiplier = clickAmount <= 5 ? 1 : clickAmount > 50 ? (clickAmount - 5) * 50 : (clickAmount - 5) * 10;
            acceleratedOffsetRef.current += (multiplier - 1) * tickInterval;
            const effectiveNow = new Date().getTime() + acceleratedOffsetRef.current;
            setTimeLeft(calculateTimeLeft(effectiveNow));
        }, tickInterval);
        return () => clearInterval(timer);
    }, [targetDate, clickAmount]);

    if (!timeLeft) {
        return <div>See you there 😉</div>;
    }

    return (
        <div
            className="grid gap-4 lg:flex lg:gap-24 grid-cols-2 fadeUp"
            onClick={() => setClickAmount(prev => prev + 1)}
        >
            <Timeunit value={timeLeft.days} label={t('days')} />
            <Timeunit value={timeLeft.hours} label={t('hours')} />
            <Timeunit value={timeLeft.minutes} label={t('minutes')} />
            <Timeunit value={timeLeft.seconds} label={t('seconds')} />
        </div>
    );
};

export default Countdown;
