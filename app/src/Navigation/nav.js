import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default function Nav () {
    

    return (
        <>
            <ul>
                <li><Link to ='/home' id='link' >Домой</Link></li> 
                <li><Link to='/about' id='link' >О Себе</Link></li>
                <li><Link to='/counter' id='link' >Счетчик</Link></li>
            </ul>
        </>
    )
}
