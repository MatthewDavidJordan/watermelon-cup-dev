import { React, useEffect, useState } from 'react';
import './CountdownTimer.css';

export const CountdownTimer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
               if (seconds > 0) {
                   setSeconds((seconds) => seconds - 1);
               } else if (minutes > 0) {
                   setMinutes((minutes) => minutes - 1);
                   setSeconds(59);
               } else if (hours > 0) {
                   setHours((hours) => hours - 1);
                   setMinutes(59);
                   setSeconds(59);
               } else if (days > 0) {
                   setDays((days) => days - 1);
                   setHours(23);
                   setMinutes(59);
                   setSeconds(59);
               }
        }, 10);
    }
        return () => clearInterval(interval);
    }, [seconds, minutes, hours, days, isRunning]);

    return (
        <div className='countdown-timer'>
            <ul className='countdown-list'>
                <li className='countdown-item'><span>1</span><span>8</span><span>0</span></li>
                <li className='countdown-item'><span>2</span><span>3</span></li>
                <li className='countdown-item'><span>5</span><span>9</span></li>
                <li className='countdown-item'><span>5</span><span>9</span></li>
            </ul>
        </div>
    )
}