import './Banner.css';
import React from 'react';
import Banner from './Banner'
import './WelcomeContent.css';

import MainPoster from '../images/Main_Poster.avif';
import BannerIMG from '../images/Wimmel_Banner_Faded.avif';
import GroupPhoto from '../images/Group_photo.avif';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className='welcome-canvas'>

      <Banner
        text={"STEPHEIGHT"}
        imageSrc1={BannerIMG}
      />

      <div className="welcome-section">
        <Link to='/kickingbrass' style={{ textDecoration: 'none' }}>
          <div>
            <img src={MainPoster} alt="Hero Poster"></img>
          </div>
          <b> KICKING BRASS </b>
        </Link>
      </div>

      <div className="welcome-section">
        <Link to='/aboutus' style={{ textDecoration: 'none' }}>
          <div>
            <img src={GroupPhoto} alt="Team"></img>
          </div>
          <b> ABOUT US </b>
        </Link>
      </div>
    </div>
  );
}