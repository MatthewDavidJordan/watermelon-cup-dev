import { React } from 'react';
import { Navbar } from '../components/Navbar'
import './Home.css';
import { Ticker } from '../components/Countdown/Ticker';

import { add } from 'date-fns';

// default date
const futureDate = add(new Date(), {
  days: 64,
  hours: 2,
  minutes: 30
});

export const Home = () => {
    return (
        <div className='home-layout'>
            <Navbar/>
            <Ticker futureDate={futureDate}/>
        </div>
    )
}