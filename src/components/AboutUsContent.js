import React from 'react';
import './AboutUsContent.css';

import banner1 from '../images/startup_group.jpg';

export default function AboutUsContent() {
    return (
        <div className="aboutus-content">
            <h1>About Us</h1>

            <h3>
                Our studio is driven by the passion of developing a video game, no matter where we are, who we are, or what our circumstances might be.
            </h3>

            <img src={banner1} alt="banner" className="banner" />

            <p>
                Our team started doing this in an area where game development is basically unheard of, while also juggling university, side jobs, and a handful of personal challenges.
                We want Stepheight to be a beacon of what is possible, no matter what restrictions one might face.
            </p>
        </div>
    );
}
