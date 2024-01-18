import { React } from 'react';
import { Navbar } from '../components/Navbar'
import './Home.css';
import { CountdownTimer } from '../components/CountdownTimer';

export const Home = () => {
    return (
        <div className='home-layout'>
            <Navbar/>
            <CountdownTimer/>
        </div>
    )
}