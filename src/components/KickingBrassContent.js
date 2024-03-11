import React from 'react';
import './KickingBrassContent.css';

import kb_logo from '../images/kicking_brass_logo.png';
import kb_banner from '../images/tuba_banner_video.mp4';

export default function KickingBrassContent() {
    const discordInviteLink = "https://discord.com/invite/fbngXskVkW";
    const youtubeLink = "https://www.youtube.com/channel/UCtTJj2MDiIE9sjcd4jZgXsQ";

    return (
        <div>
            <div className="video-container">
                <img src={kb_logo} alt="Logo" />
                <video autoPlay loop muted>
                    <source src={kb_banner} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-fade"></div>
            </div>

            <div className="kickingbrass-content">
                <h2>
                    THE WORLD OF KICKING BRASS
                </h2>

                <p>
                    Your family is missing, your village has been ransacked, and hostile forces surround you on all sides. King Brasshoven’s troops march upon the land you once called home and you’re the only one who can beat them back!

                    Armed with a magical tuba that just won’t let you die; you fight your way through hordes of soldiers to get revenge on Brasshoven! Pick up different instruments and stock up on useful items to create a unique playstyle each run. Perhaps you’ll even meet some friendly faces along the way?

                    Kicking Brass is a 2.5D, bullet-hell, roguelike where music holds enormous power and will be the only tool in your survival. Test your mettle NOW in the endless Colosseum mode and later in an official story!
                </p>

                <h3>
                    THE COLOSSEUM
                </h3>

                <p>
                    The gates to King Brasshoven’s colosseum open once again! For centuries only the strongest, bravest, and dumbest warriors from all over the continent have made their way to these sacred grounds in order to prove themselves (and/or die horrifically).

                    Each year a champion has left their mark on the Empire of Brass and each year more contestants try to do the same.

                    Face waves upon waves of enemies, each more challenging than the last. Luckily a few totally trustworthy vendors are at your side, ready to supply you with weapons and equipment. So far very few have made it to the top.

                    Now it is your turn to pick up a trumpet and prove your mettle or meet a fate like the rest.
                </p>

                <div className='links'>
                    <a href={discordInviteLink} target="_blank" rel="noopener noreferrer" className="discord-button">
                        Discord
                    </a>

                    <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="youtube-button">
                        Youtube
                    </a>
                </div>
            </div>
        </div>
    );
}
