import React from 'react';
import './WelcomeContent.css';

import MainPoster from '../images/Main_Poster.avif';
import BannerIMG from '../images/Wimmel_Banner_Faded.avif';
import GroupPhoto from '../images/Group_photo.avif';
import Garymodel from '../images/Body_Gatling.glb';
import { colors } from '@mui/material';

export default function Welcome() {
  return (
    <div className='welcome-canvas'>

      <div className='Banner'>
        <img src={BannerIMG}></img>
        <h1>STEPHEIGHT</h1>
      </div>

      <div className="welcome-section">

        <div className="welcome-message">
          <h2>
            <i>
              the natural outcome of a desire to make video games
            </i>
          </h2>

        </div>

        <a href='/kickingbrass'>
          <div>
            <img src={MainPoster} alt="Hero Poster"></img>
          </div>
          <b> KICKING BRASS </b>
        </a>

      </div>

      <div className="welcome-section">
        <a href='/aboutus'>
          <div>
            <img src={GroupPhoto} alt="Team"></img>
          </div>
          <b> ABOUT US </b>
        </a>

      </div>




    </div >
  );
}