import React from 'react';
import './Home.css';

import WelcomeContent from '../components/WelcomeContent'
import HomeContent from '../components/HomeContent'

export default function Home() {
    return (
        <div>
            <WelcomeContent />
            <HomeContent />
        </div>
    );
}
