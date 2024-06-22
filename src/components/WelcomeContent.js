import React from 'react';
import './WelcomeContent.css';

import sprite1 from '../images/goose_walk_right.gif';
import sprite2 from '../images/gatling_walk_right.gif';
import sprite3 from '../images/drumen_walk_right.gif';
import sprite4 from '../images/heavybrass_walk_right.gif';
import sprite5 from '../images/bb_walk_right.gif';
import sprite6 from '../images/Michaela_walk_right.gif';

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

        <a href='/kickingbrass'>
          <div className='sprite-row'>
            <img src={sprite1} alt="sprite1" className="sprite" />
            <img src={sprite3} alt="sprite2" className="sprite" />
            <img src={sprite2} alt="sprite3" className="sprite" />
            <img src={sprite6} alt="sprite4" className="sprite" />
            <img src={sprite5} alt="sprite5" className="sprite" />
            <img src={sprite4} alt="sprite6" className="sprite" />
          </div>
        </a>
        <h3>
          Our studio is driven by the passion of developing a video game, no matter where we are, who we are, or what our circumstances might be.
        </h3>

        <img src={banner1} alt="banner" className="banner" />

        <p>
          Our team started doing this in an area where game development is basically unheard of, while also juggling university, side jobs, and a handful of personal challenges.
          We want Stepheight to be a beacon of what is possible, no matter what restrictions one might face.
        </p>
      </div>
    </div>
  );
}
