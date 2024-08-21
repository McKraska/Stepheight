import React from 'react';
import './Impressum.css';

const Impressum = () => {
    return (
        <div className="impressum-container">
            <h1>Impressum</h1>
            <h2>Stepheight UG (Haftungsbeschränkt) i.G.</h2>
            <p><strong>Address:</strong> Helmholtzstr. 15, 99423 Weimar</p>
            <p><strong>Managing Director:</strong> Samuel Flentje</p>
            <p><strong>Email:</strong> <a href="mailto:social@stepheight.com">social@stepheight.com</a></p>
            <p><strong>VAT ID:</strong> In process</p>
            <p><strong>Commercial Register:</strong> In process</p>

            <h3>Disclaimer</h3>
            <p>Despite careful content control, we do not assume any liability for the content of external links. The content of linked pages is the sole responsibility of their operators.</p>
        </div>
    );
};

export default Impressum;