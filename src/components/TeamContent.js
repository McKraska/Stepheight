import React from 'react';
import './TeamContent.css';

import image1 from '../images/sam.jpg';
import image2 from '../images/peter.jpg';
import image3 from '../images/oskar.jpg';

export default function TeamContent() {
    return (
        <div>
            <div className="team-content">
                <div className="image-row">
                    <img src={image1} alt="Poster" className="image" />
                    <img src={image2} alt="Poster" className="image" />
                    <img src={image3} alt="Poster" className="image" />
                </div>
            </div>
        </div>

    );
}

