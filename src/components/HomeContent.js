import React from 'react';
import { Link } from 'react-router-dom';
import './HomeContent.css';

import kb_logo from '../images/kicking_brass_logo.png';

export default function Home() {
    return (
        <div>
            <div className="home-content">
                <Link to="/kickingbrass">
                    <img src={kb_logo} alt="Logo" style={{ cursor: 'pointer' }} />
                </Link>
            </div>
        </div>
    );
}

