import React from 'react';
import { useLocation } from 'react-router-dom';
import twitter_logo from '../images/twitter_icon.png';
import youtube_logo from '../images/youtube_icon.png';
import './SocialLinks.css';

export default function SocialLinks() {
    const location = useLocation();
    const isKickingBrassPage = location.pathname === '/kickingbrass';

    return (
        <div className={`social-links ${isKickingBrassPage ? 'kicking-brass-theme' : ''}`}>
            <a href="https://twitter.com/StepheightGames" target="_blank" rel="noopener noreferrer">
                <img src={twitter_logo} alt="Twitter Logo" className="navbar-icon" />
            </a>

            <a href="https://www.youtube.com/channel/UCtTJj2MDiIE9sjcd4jZgXsQ" target="_blank" rel="noopener noreferrer">
                <img src={youtube_logo} alt="YouTube Logo" className="navbar-icon" />
            </a>
        </div>
    );
}