import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, Card, Tabs, Tab, Grid, CardContent, Box } from '@mui/material';
import './KickingBrassContent.css';

import kb_logo from '../images/kicking_brass_logo.png';
import discord from '../images/discord.png';
import kb_banner from '../images/tuba_banner_video.mp4';
import kb_img1 from '../images/Promo_art_bw.png';
import controlsGif from '../images/Controls.gif';
import inventory from '../images/Inventory.png';
import hearts from '../images/hearts.png';

import lyre from '../images/pickup_lyre.png';
import snare from '../images/pickup_snare.png';
// import electroloop from '../images/pickup_electro_loop.png';
import xylophone from '../images/pickup_xylophone.png';
// import floog from '../images/pickup_fleet.png';

import sprite1 from '../images/goose_walk_right.gif';
import sprite2 from '../images/gatling_walk_right.gif';
import sprite3 from '../images/drumen_walk_right.gif';
import sprite4 from '../images/heavybrass_walk_right.gif';
import sprite5 from '../images/bb_walk_right.gif';
import sprite6 from '../images/Michaela_walk_right.gif';

import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function KickingBrassContent() {
    const discordInviteLink = "https://discord.com/invite/fbngXskVkW";

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#a16edd',
            },
        },
        typography: {
            fontFamily: "'Maven Pro', sans-serif",
        },
        components: {
            MuiTab: {
                styleOverrides: {
                    root: {
                        color: '#a16edd',
                    },
                },
            },
        },
    });

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

            <ThemeProvider theme={theme}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    textColor="primary"
                    indicatorColor="primary"
                >
                    <Tab label="About" />
                    <Tab label="Fundamentals" />
                    <Tab label="Glossary" />
                </Tabs>
                {/* Your other components go here */}
            </ThemeProvider>

            {/* about */}
            {value === 0 && (

                <Card sx={{ backgroundColor: '#180d25' }} className="card" >
                    <CardContent>
                        <h1>THE WORLD OF KICKING BRASS</h1>
                        <a href={discordInviteLink} target="_blank" rel="noopener noreferrer" className="discord-button">
                            <img src={discord} alt="discord" />
                        </a>

                        <h2>
                            Your family is missing,
                        </h2>

                        <h2>
                            your village has been ransacked,
                        </h2>

                        <h2>
                            and hostile forces surround you on all sides.
                        </h2>

                        <div className='sprite-row'>
                            <img src={sprite1} alt="sprite1" className="sprite" />
                            <img src={sprite3} alt="sprite2" className="sprite" />
                            <img src={sprite2} alt="sprite3" className="sprite" />
                            <img src={sprite6} alt="sprite4" className="sprite" />
                            <img src={sprite5} alt="sprite5" className="sprite" />
                            <img src={sprite4} alt="sprite6" className="sprite" />
                        </div>

                        <p>
                            King Brasshoven’s troops march upon the land you once called home and you’re the only one who can beat them back!</p>
                        <p>
                            Armed with a magical tuba that just won’t let you die; you fight your way through hordes of soldiers to get revenge on Brasshoven!
                        </p>
                        <p>

                            Pick up different instruments and stock up on useful items to create a unique playstyle each run. Perhaps you’ll even meet some friendly faces along the way?
                        </p>
                        <p>
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
                    </CardContent>
                </Card>

            )}

            {/* controls */}
            {value === 1 && (
                <Box sx={{ margin: '30px' }}>
                    <Card sx={{ marginBottom: '20px', backgroundColor: '#180d25' }} className="card">
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={8}>
                                    <Typography variant="h5" gutterBottom color={''}>Controls</Typography>
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
                                        <img src={controlsGif} className='glossary-image' alt="Controls GIF" style={{ maxWidth: '100%', height: '75%' }} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card sx={{ marginBottom: '20px', backgroundColor: '#180d25' }} className="card">
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={8}>
                                    <Typography variant="h5" gutterBottom>Inventory</Typography>
                                    <List dense>
                                        <Typography variant='p' className=''>
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
                                        <img src={inventory} alt="Inventory" style={{ maxWidth: '100%', height: '75%' }} className='glossary-image' />
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card sx={{ marginBottom: '20px', backgroundColor: '#180d25' }} className="card">
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
                                        <img src={hearts} alt="hearts" style={{ maxWidth: '100%', height: '75%' }} className='glossary-image' />
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            )}

            {/* glossary */}
            {value === 2 && (
                <Box sx={{ margin: '50px' }}>
                    <Card sx={{ backgroundColor: '#180d25' }} className="card">
                        <CardContent>
                            <Typography variant="h5" gutterBottom>INSTRUMENTS</Typography>

                            {[
                                { name: 'LYRE', description: 'Primary: Shoots [2 connected 8th]...', image: lyre },
                                { name: 'SNARE', description: 'Primary: Commands all minion units...', image: snare },
                                { name: 'XYLOPHONE', description: 'Primary: Summons a spooky scary skeleton...', image: xylophone },
                            ].map((item, index) => (
                                <Grid container spacing={2} alignItems="center" key={item.name}>
                                    <Grid item xs={12} md={6} order={index % 2 === 0 ? 1 : 2}>
                                        <img src={item.image} alt={item.name} className='glossary-image' />
                                    </Grid>
                                    <Grid item xs={12} md={6} order={index % 2 === 0 ? 2 : 1}>
                                        <Typography variant="h6" gutterBottom>{item.name}</Typography>
                                        <Typography paragraph>{item.description}</Typography>
                                    </Grid>
                                </Grid>
                            ))}

                            <Typography variant="h5" gutterBottom>ITEMS</Typography>
                            {[
                                { name: 'LYRE', description: 'Primary: Shoots [2 connected 8th]...', image: lyre },
                                { name: 'SNARE', description: 'Primary: Commands all minion units...', image: snare },
                                { name: 'XYLOPHONE', description: 'Primary: Summons a spooky scary skeleton...', image: xylophone },
                            ].map((item, index) => (
                                <Grid container spacing={2} alignItems="center" key={item.name}>
                                    <Grid item xs={12} md={6} order={index % 2 === 0 ? 1 : 2}>
                                        <img src={item.image} alt={item.name} className='glossary-image' />
                                    </Grid>
                                    <Grid item xs={12} md={6} order={index % 2 === 0 ? 2 : 1}>
                                        <Typography variant="h6" gutterBottom>{item.name}</Typography>
                                        <Typography paragraph>{item.description}</Typography>
                                    </Grid>
                                </Grid>
                            ))}
                        </CardContent>
                    </Card>
                </Box>
            )}
        </div>
    );
}