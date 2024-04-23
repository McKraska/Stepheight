import React from 'react';
import './WelcomeContent.css';

import banner from '../images/collage.png';
import banner1 from '../images/startup_group.jpg';

export default function Welcome() {
  return (
    <div class="welcome-section">
      <div class="welcome-message">
        <h1>Stepheight</h1>
        <h2>
          What we stand for:
          <i>
            “Stepheight is the natural outcome of a desire to make video games”
          </i>
        </h2>

        <p>
          - is what Oskar once said when asked to describe our group and why we do what we do.
        </p>

        <img src={banner} alt="banner" className="banner" />

        <h3>
          Our studio is driven by the passion of developing a video game, no matter where we are, who we are, or what our circumstances might be.
        </h3>

        <p>
          Our team started doing this in an area where game development is basically unheard of, while also juggling university, side jobs, and a handful of personal challenges.
          We want Stepheight to be a beacon of what is possible, no matter what restrictions one might face.
        </p>

        <img src={banner1} alt="banner" className="banner" />
      </div>
    </div>
  );
}
