import React from 'react';
import { Link } from 'react-router-dom';
import './HomeContent.css';

import kb_logo from '../images/kicking_brass_logo.png';
import poster from '../images/publi_poster-1.png';

export default function Home() {
    return (
        <div>
            <div className="home-content">
                <div className="image-row">
                    <Link to="/kickingbrass">
                        <img src={kb_logo} alt="Logo" className="image" />
                    </Link>
                    <img src={poster} alt="Poster" className="image" />
                </div>
            </div>
        </div>
    );
}

