import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import twitter_logo from '../images/twitter_icon.png';
import youtube_logo from '../images/youtube_icon.png';

const Footer = () => {
    return (
        <footer className="footer">
            <Link to="https://www.youtube.com/channel/UCtTJj2MDiIE9sjcd4jZgXsQ">
                <img src={youtube_logo} alt="YouTube Logo" className="navbar-icon" />
            </Link>

            <Link to="https://twitter.com/StepheightGames">
                <img src={twitter_logo} alt="Twitter Logo" className="navbar-icon" />
            </Link>
            © {new Date().getFullYear()} Stepheight. All rights reserved. <a href='https://be.contentful.com/login/' target="_blank" rel="noopener noreferrer">Admin</a>
        </footer>
    );
};

export default Footer;
