import React from 'react';
import './Socials.css';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import discord from '../discord.png';
import youtube from '../youtube.png';
import twitter from '../twitter.png';

export default function Socials() {

    return (
        <div id='socials'>

            <div className='box'>
                <Fab size="large" color="#00008B" aria-label="add" href="App.js" sx={{ backgroundcolour: 'red;' }}>
                    <img src={discord} alt="Stepheight" />
                </Fab>
            </div>

            <div className='box'>
                <Fab size="large" color='00008B' aria-label="add" href="https://google.com" >
                    <img src={youtube} alt="Stepheight" />
                </Fab>
            </div>

            <div className='box'>
                <Fab size="large" color="#00008B" aria-label="add" href="https://google.com" >
                    <img src={twitter} alt="Stepheight" />
                </Fab>

            </div>

        </div >

    )
}