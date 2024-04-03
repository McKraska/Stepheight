import React from 'react';
import './HomeContent.css';

import poster from '../images/publi_poster-1.png';

export default function Home() {
    return (
        <div>
            <div className="home-content">
                <div className="image-row">
                    <img src={poster} alt="Poster" className="image" />
                </div>
            </div>
        </div>
    );
}

