import React from 'react';
import './KickingBrassContent.css';

import kb_logo from '../images/kicking_brass_logo.png';

export default function KickingBrassContent() {
    return (
        <div>
            <div className="kickingbrass-content">
                <img src={kb_logo} alt="Logo" style={{ cursor: 'pointer' }} />
            </div>
        </div>
    );
}
