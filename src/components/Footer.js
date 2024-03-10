import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            © {new Date().getFullYear()} Stepheight. All rights reserved. <a href='https://be.contentful.com/login/' target="_blank">Admin</a>
        </footer>
    );
};

export default Footer;
