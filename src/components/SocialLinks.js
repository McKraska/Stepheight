import React from 'react';
import twitter_logo from '../images/twitter_icon.png';
import youtube_logo from '../images/youtube_icon.png';

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a href="https://twitter.com/StepheightGames" target="_blank" rel="noopener noreferrer">
                <img src={twitter_logo} alt="Twitter Logo" className="navbar-icon" />
            </a>

            <a href="https://www.youtube.com/channel/UCtTJj2MDiIE9sjcd4jZgXsQ" target="_blank" rel="noopener noreferrer">
                <img src={youtube_logo} alt="YouTube Logo" className="navbar-icon" />
            </a>
        </div>
    );
}