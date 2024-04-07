import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, Card, Tabs, Tab, Grid, CardContent, Box } from '@mui/material';
import './KickingBrassContent.css';

import kb_logo from '../images/kicking_brass_logo.png';
import youtube from '../images/youtube.png';
import discord from '../images/discord.png';
import kb_banner from '../images/tuba_banner_video.mp4';
import kb_img1 from '../images/Promo_art_bw.png';
import controlsGif from '../images/Controls.gif';
import inventory from '../images/Inventory.png';
import hearts from '../images/hearts.png';

export default function KickingBrassContent() {
    const discordInviteLink = "https://discord.com/invite/fbngXskVkW";
    const youtubeLink = "https://www.youtube.com/channel/UCtTJj2MDiIE9sjcd4jZgXsQ";

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='kickingbrass-body'>
            <div className="video-container">
                <img src={kb_logo} alt="Logo" />
                <video autoPlay loop muted playsInline>
                    <source src={kb_banner} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-fade"></div>
            </div>

            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="About" />
                <Tab label="Fundamentals" />
                <Tab label="Glossary" />
            </Tabs>

            {value === 0 && (
                <div className="kickingbrass-content">
                    <h1>THE WORLD OF KICKING BRASS</h1>

                    <h2>
                        Your family is missing, your village has been ransacked, and hostile forces surround you on all sides.
                    </h2>

                    <p>
                        King Brasshoven’s troops march upon the land you once called home and you’re the only one who can beat them back!
                        Armed with a magical tuba that just won’t let you die; you fight your way through hordes of soldiers to get revenge on Brasshoven! Pick up different instruments and stock up on useful items to create a unique playstyle each run. Perhaps you’ll even meet some friendly faces along the way?
                        Kicking Brass is a 2.5D, bullet-hell, roguelike where music holds enormous power and will be the only tool in your survival. Test your mettle NOW in the endless Colosseum mode and later in an official story!
                    </p>

                    <img src={kb_img1} alt="Colosseum" className='img1' />

                    <h3> THE COLOSSEUM </h3>

                    <p>
                        The gates to King Brasshoven’s colosseum open once again! For centuries only the strongest, bravest, and dumbest warriors from all over the continent have made their way to these sacred grounds in order to prove themselves (and/or die horrifically).
                        Each year a champion has left their mark on the Empire of Brass and each year more contestants try to do the same.
                        Face waves upon waves of enemies, each more challenging than the last. Luckily a few totally trustworthy vendors are at your side, ready to supply you with weapons and equipment. So far very few have made it to the top.
                        Now it is your turn to pick up a trumpet and prove your mettle or meet a fate like the rest.
                    </p>

                    <div className='links'>
                        <a href={discordInviteLink} target="_blank" rel="noopener noreferrer" className="discord-button">
                            <img src={discord} alt="discord" />
                        </a>
                        <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="youtube-button">
                            <img src={youtube} alt="youtube" />
                        </a>
                    </div>
                </div>
            )}

            {value === 1 && (
                <Box sx={{ margin: '100px' }}>
                    <Card sx={{ marginBottom: '20px' }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={8}>
                                    <Typography variant="h5" gutterBottom>Controls</Typography>
                                    <List dense>
                                        <ListItem><ListItemText primary="[W] - Move Forward" /></ListItem>
                                        <ListItem><ListItemText primary="[A] - Move Left" /></ListItem>
                                        <ListItem><ListItemText primary="[S] - Move Backward" /></ListItem>
                                        <ListItem><ListItemText primary="[D] - Move Right" /></ListItem>
                                        <ListItem><ListItemText primary="[Space] - Jump" /></ListItem>
                                        <ListItem><ListItemText primary="[Cursor] - Aim" /></ListItem>
                                        <ListItem><ListItemText primary="[Ctrl] - Camera to Cursor" /></ListItem>
                                        <ListItem><ListItemText primary="[LMB] - Primary Attack" /></ListItem>
                                        <ListItem><ListItemText primary="[RMB] - Secondary Attack" /></ListItem>
                                        <ListItem><ListItemText primary="[Scroll Up] - Next Instrument" /></ListItem>
                                        <ListItem><ListItemText primary="[E] - Next Instrument" /></ListItem>
                                        <ListItem><ListItemText primary="[Scroll Down] - Prev Instrument" /></ListItem>
                                        <ListItem><ListItemText primary="[Q] - Prev Instrument" /></ListItem>
                                        <ListItem><ListItemText primary="[1] [2] [3] - Use Item" /></ListItem>
                                        <ListItem><ListItemText primary="[Esc] - Toggle Menu" /></ListItem>
                                        <ListItem><ListItemText primary="[I] - Toggle Inventory" /></ListItem>
                                        <ListItem><ListItemText primary="[F] - Interact" /></ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        height="100%"
                                    >
                                        <img src={controlsGif} alt="Controls GIF" style={{ maxWidth: '100%', height: '75%' }} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card sx={{ marginBottom: '20px' }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={8}>
                                    <Typography variant="h5" gutterBottom>Inventory</Typography>
                                    <List dense>
                                        <Typography variant='p'>
                                            Your inventory consists of three sections.
                                            Firstly, containing your trusty Tuba Bell, you have a plus shaped inventory section which holds all passive clothing items called Equipment. There are slots for Headware, Gloves, Chest / back pieces, shoes and trousers, and finally trinkets like necklaces. You can only wear one Equipment of the same typ.
                                            Most Frequently used is your section for Active items. These three item boxes can be seen at all times, and can be activated with one of the item use keys, by default [1] [2] [3]. Items with cooldown will display the ammount of time until they recharge, and consumable wll simply disappear and free the slot.
                                            Finally You will find your instrments in a section of 3 boxes. You can only hold up to three Instruments at once. Cycle between them by default with your scroll wheel, or [Q] [E].
                                            While in the full inventory view, any contents of the inventory can be dragged around to re-position, or thrown out of your inventoey by dragging it into the empty space around.
                                        </Typography>
                                    </List>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        height="100%"
                                    >
                                        <img src={inventory} alt="Inventory" style={{ maxWidth: '100%', height: '75%' }} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card sx={{ marginBottom: '20px' }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={8}>
                                    <Typography variant="h5" gutterBottom>Dealing Damage</Typography>
                                    <List dense>
                                        <Typography variant='p'>
                                            You start with 3 hearts. Getting hit by enemies will drain your hearts so try not to lose them! You can gain more hearts by picking up a max heart. You can also restore missing health by using consumables such as the cookie.
                                            If you do end up losing all your health, you will get to retry from your last checkpoint for each extra life you have. I’m afraid that you’ll have to restart your run if you lose all your lives.
                                            In addition to normal hearts you may at times come across items that give you [glass heart]. [glass heart] is like an extra [heart] you get, however it only blocks one hit and disappears afterward. If you don’t take damage the [glass heart] will disappear after a short time.
                                            Notes and Shattering :
                                            Lob shots and Ghost shots Enemy projectiles deal damage based on their musical value. [8th] - the smallest projectile type, deals [half heart] of damage. These may be connected by a beam [2-8ths]/[3-8ths]. Getting hit by connected notes deals as much damage equal to the number of [8th] in the group . [4th] - Deals [heart] of damage [half] - Deals [2 hearts] of damage [whole] - Deals [4 hearts] of damage Projectile Trajectory: Notes can be shot in different trajectories depending on which instrument they come from. Most projectiles are linear (such as the lyre and trumpet) but others may be lobbed projectiles that fly in an arc (such as the saxophone), or orbiting projectiles (such as the violin produces). Some weapons don’t produce projectiles at all, but we’ll let you figure that out. Shattering: Projectiles can be shattered with certain weapons or items. When a projectile shatters it reverses its trajectory and splits into two projectiles that deal half as much damage each. For example, shattering a [half] would produce [two 4th]. Shattering an [8th] usually destroys the projectile, unless connected by a beam: [2-8th]/[3-8th]. Shattering a group of connected 8ths splits them into individual notes instead. [Ghost note], such as the ones that the violin produces, cannot deal damage unless shattered. If an enemy contacts a [ghost note] the note will simply pass through. If shattered, the [ghost note] turns into regular [8th]s and deal damage normally.
                                        </Typography>
                                    </List>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        height="100%"
                                    >
                                        <img src={hearts} alt="hearts" style={{ maxWidth: '100%', height: '75%' }} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            )}

            {value === 2 && (
                <Box></Box>
            )}
        </div>
    );
}