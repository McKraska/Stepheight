import React from 'react';
import './AboutUsContent.css';

import TeamContent from '../components/TeamContent'


export default function AboutUs() {
    return (
        <div className="aboutus-content">
            <h1>About Us</h1>

            <div className="card-content">
                <TeamContent />
            </div>
        </div>
    );
}
