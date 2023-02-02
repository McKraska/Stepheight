import React from 'react';
import './Socials.css';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

export default function Socials() {

    return (
        <div id='socials'>

            <div className='box'>
                <Fab size="medium" color="#00008B" aria-label="add" href="https://google.com" sx={{ backgroundcolour: 'red;' }}>

                </Fab>
            </div>

            <div className='box'>
                <Fab size="medium" color='00008B' aria-label="add" href="https://google.com" >

                </Fab>
            </div>

            <div className='box'>
                <Fab size="medium" color="#00008B" aria-label="add" href="https://google.com" >

                </Fab>

            </div>

        </div >

    )
}