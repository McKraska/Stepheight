import React from 'react';
import './WelcomeContent.css';
import Banner from './Banner';
import { Link } from 'react-router-dom';

import BannerIMG from '../images/Wimmel_Banner_Faded.avif';
import primaryTitle from '../images/STEPHEIGHT.gif';

import kb_banner from '../images/KB_Banner_Faded.avif';
import kb_logo from '../images/logo_KB.avif';

export default function Welcome() {
  return (
    <div className="welcome-page">
      <Banner primaryTitle={primaryTitle} imageSrc1={BannerIMG} />

      <div className="quote-section">
        <p className="quote-text">
          <span className="font-bold">"Stepheight is the natural outcome of a desire to make video games."</span>
        </p>
        <p className="quote-author">-Oskar</p>
      </div>

      <div className="arrow-down">
        <i className="fa-solid fa-chevron-down"></i>
      </div>

      <div className="kb-banner">
        <img src={kb_banner} alt="KB Banner" className="kb-banner-image" />
        <Link to="/kickingbrass" className="kb-logo-link">
          <img src={kb_logo} alt="KB Logo" className="kb-logo" />
        </Link>
      </div>

    </div>
  );
};