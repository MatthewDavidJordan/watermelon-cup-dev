import { React } from 'react';
import { Navbar } from '../components/Navbar'
import './Home.css';
import { Ticker } from '../components/Ticker';

import { add } from 'date-fns';

// default date
const futureDate = add(new Date(), {
  days: 0,
  hours: 0,
  minutes: 1
});

export const Home = () => {
    return (
        <div className='home-layout'>
            <Navbar/>
            <Ticker futureDate={futureDate}/>
        </div>
    )
}