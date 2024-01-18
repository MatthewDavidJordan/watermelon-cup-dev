import { Link } from 'react-router-dom';
import { React } from 'react';
import './Navbar.css';

export const Navbar = () => {
    return (
    <>
    <nav>
        <ul className='nav-list'>
            <li className='nav-item'>
                <Link to="/">Watermelon Cup</Link>
            </li>
            <li className='nav-item'>
                <Link to="/teams">Teams</Link>
            </li>
            <li className='nav-item'>
                <Link to="/standings">Standings</Link>
            </li>
            <li className='nav-item'>
                <Link to="/matches">Matches</Link>
            </li>
            <li className='nav-item'>
                <Link to="/"><button className='primary-button'>Register</button></Link>
            </li>
        </ul>
    </nav>
    </>
    )
}