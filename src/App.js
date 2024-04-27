import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import KickingBrass from './pages/KickingBrass';
import Downloads from './pages/Downloads';
import Updates from './pages/Updates';

function App() {
    return (
        <div className='app'>
            {console.log('Welcome to Stepheight.com')}
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/kickingbrass" element={<KickingBrass />} />
                    <Route path="/downloads" element={<Downloads />} />
                    <Route path="/updates" element={<Updates />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
