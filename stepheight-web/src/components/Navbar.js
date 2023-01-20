import React from 'react';
import './Navbar.css';
import logo from '../logo_7.png';


export default function Navbar() {
    return (
        <div id='Nav'>

            <img src={logo} alt="Logo" />

            <div id='Nav_Selection'>

                <a>KICKING BRASS</a> 
                
                <a>PATCH NOTES</a>  

                <a>DEV LIBRARY</a>

                <a>ABOUT</a>

            </div>
          
        </div>
        
    )
}