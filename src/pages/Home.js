import React from 'react';
import './Home.css';

import WelcomeContent from '../components/WelcomeContent'
import HomeContent from '../components/HomeContent'
import TeamContent from '../components/TeamContent'

export default function Home() {
    return (
        <div className='home-body'>
            <WelcomeContent />
            <TeamContent />
            <HomeContent />
        </div>
    );
}
