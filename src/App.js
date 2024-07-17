// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import KickingBrass from './pages/KickingBrass';
import AboutUs from './pages/AboutUs';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/kickingbrass" element={<KickingBrass />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;