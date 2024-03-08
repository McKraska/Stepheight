import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Downloads from './pages/Downloads';
import Glossary from './pages/Glossary';
import Updates from './pages/Updates';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/download" element={<Downloads />} />
                <Route path="/glossary" element={<Glossary />} />
                <Route path="/updates" element={<Updates />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
