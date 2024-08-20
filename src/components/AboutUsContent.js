import React from 'react';
import './AboutUsContent.css';

import banner1 from '../images/startup_group.jpg';

export default function AboutUsContent() {
    return (
        <div className="aboutus-content">
            <h1>About Us</h1>

            <h3>
            Three indie devs, setting out to create innovative games, hand in hand with their community!
            </h3>

            <img src={banner1} alt="banner" className="banner" />

            <p>
            Forming for what was originally a university project, Stepheight is one of a handful of developers trying to make games in Thuringia. Driven by an eagerness to create games in a region where very few people have tried so far, we seek to show that anybody can make games anywhere, regardless of background or location. Our dedication stems from our desire to build a community, locally but also online. We hope to cultivate an active following that wants to interact with us and help make our games be the best it can be.
            </p>

        </div>
    );
}
