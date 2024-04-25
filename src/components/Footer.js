import React from 'react';
import './Footer.css';

import twitter_logo from '../images/twitter_icon.png';
import youtube_logo from '../images/youtube_icon.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/..." target="_blank" rel="noopener noreferrer">
                    <img src={youtube_logo} alt="YouTube Logo" className="footer-icon" />
                </a>
                <a href="https://twitter.com/StepheightGames" target="_blank" rel="noopener noreferrer">
                    <img src={twitter_logo} alt="Twitter Logo" className="footer-icon" />
                </a>
            </div>
            <div className="footer-text-content">
                © {new Date().getFullYear()} Stepheight. All rights reserved.
            </div>
            <div className="footer-text-content">
                <a href="https://be.contentful.com/login/" className="footer-link admin-link" target="_blank" rel="noopener noreferrer">Admin</a>
                <a href="../documents/ImpressumStepheight.pdf" target="_blank" rel="noopener noreferrer">Impressum</a>
            </div>
        </footer>
    );
};

export default Footer;
