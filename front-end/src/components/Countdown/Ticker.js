import { TickerCell } from './TickerCell';
import { ThreeDigitTickerCell } from './ThreeDigitTickerCell'
import { TickerSeparator } from './TickerSeparator';
import { useTicker } from '../../hooks/useTicker';

import '../../styles/Ticker.css';

export const Ticker = ({ futureDate }) => {
    const { days, hours, minutes, seconds, isTimeUp } = useTicker(futureDate);
    const tickerContents = isTimeUp ? (
        <div className='timeIsUp'>Time is up!!!</div>
    ) : (
        <>
            {/* <h2>Get Ready! Shenanigans commence in:</h2> */}
            <ThreeDigitTickerCell value={days} label="Days" />
            <TickerSeparator />
            <TickerCell value={hours} label="Hours" />
            <TickerSeparator />
            <TickerCell value={minutes} label="Minutes" />
            <TickerSeparator />
            <TickerCell value={seconds} label="Seconds" />
        </>
    );

    return (
        <div className='tickerShell'>
            { tickerContents }           
        </div>              
    );
}