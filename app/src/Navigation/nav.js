import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default function Nav () {
    

    return (
        <>
            <ul>
                <li><Link to ='/home'>Домой</Link></li> 
                <li><Link to='/about'>О Себе</Link></li>
            </ul>
        </>
    )
}
