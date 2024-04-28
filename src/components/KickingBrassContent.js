import React, { useState } from 'react';
import { Typography, List, Card, Tabs, Tab, Grid, CardContent, Box } from '@mui/material';
import './KickingBrassContent.css';

import kb_logo from '../images/kicking_brass_logo.png';
import discord from '../images/discord.png';
import kb_banner from '../images/tuba_banner_video.mp4';
import kb_img1 from '../images/Promo_art_bw.png';
import controlsGif from '../images/Controls.gif';
import inventory from '../images/Inventory.png';

//ITEMS
import hearts from '../images/hearts.png';
import double_bass from '../images/pickup_double_bass.png';
import frigid_loop from '../images/pickup_ice_loop.png';
import electro_loop from '../images/pickup_electro_loop.png';
import cinder_loop from '../images/pickup_fire_loop.png';
import ballet_skirt from '../images/pickup_ballet.png';
import chilli from '../images/pickup_chilli.png';
import cookie from '../images/pickup_cookie.png';
import egg from '../images/pickup_egg.png';
import bottled_starlight from '../images/pickup_domain.png';
import fleet_feather from '../images/pickup_fleet.png';
import glass_furnace from '../images/pickup_glass_furnace.png';
import goose_flute from '../images/pickup_goose.png';
import gread_armour from '../images/pickup_gread_armour.png';
import healing_amulet from '../images/pickup_healing_amulet.png';
import oven_mittens from '../images/pickup_mittens.png';
import piggybank from '../images/pickup_piggy.png';
import pizza from '../images/pickup_pizza.png';
import plate_armour from '../images/pickup_plate.png';
import potato from '../images/pickup_potato.png';
import rusty_shield from '../images/pickup_rusty_shield.png';
import saxophone from '../images/pickup_saxophone.png';
import soul_loop from '../images/pickup_soul_loop.png';
import soup from '../images/pickup_soup.png';
import substitute_doll from '../images/pickup_substitute.png';
import thorn_mantle from '../images/pickup_thornmantle.png';
import trumpet from '../images/pickup_trumpet.png';
import violin from '../images/pickup_violin.png';

//INSTRUMENTS
import lyre from '../images/pickup_lyre.png';
import snare from '../images/pickup_snare.png';
import xylophone from '../images/pickup_xylophone.png';

// ENEMIES
import goose from '../images/goose_walk_right.gif';
import gary from '../images/gatling_walk_right.gif';
import mike from '../images/drumen_walk_right.gif';
import gerhard from '../images/heavybrass_walk_right.gif';
import brassarian from '../images/bb_walk_right.gif';
import michaela from '../images/Michaela_walk_right.gif';
import clyde from '../images/Clyde_spin_attack.gif';
import roger from '../images/gunner_walk_right.gif';
import tybalt from '../images/melen_walk_right.gif';
import bill from '../images/saxen_walk_right.gif';





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
                <div className="kickingbrass-content">
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
                                <img src={goose} alt="goose" className="sprite" />
                                <img src={mike} alt="mike" className="sprite" />
                                <img src={gary} alt="gary" className="sprite" />
                                <img src={michaela} alt="michaela" className="sprite" />
                                <img src={gerhard} alt="gerhard" className="sprite" />
                                <img src={brassarian} alt="brassarian" className="sprite" />
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

                            <div className='sprite-row-flipped'>
                                <img src={goose} alt="goose" className="sprite" />
                                <img src={mike} alt="mike" className="sprite" />
                                <img src={gary} alt="gary" className="sprite" />
                                <img src={michaela} alt="michaela" className="sprite" />
                                <img src={gerhard} alt="gerhard" className="sprite" />
                                <img src={brassarian} alt="brassarian" className="sprite" />
                            </div>

                            <h1> THE COLOSSEUM </h1>

                            <img src={kb_img1} alt="Colosseum" className='img1' />

                            <h2>
                                The gates to King Brasshoven’s colosseum open once again!
                            </h2>

                            <h3>
                                For centuries only the strongest, bravest, and dumbest warriors from all over the continent have made their way to these sacred grounds in order to prove themselves (and/or die horrifically).
                            </h3>
                            <p>
                                Each year a champion has left their mark on the Empire of Brass and each year more contestants try to do the same.
                                Face waves upon waves of enemies, each more challenging than the last. Luckily a few totally trustworthy vendors are at your side, ready to supply you with weapons and equipment. So far very few have made it to the top.
                            </p>
                            <p>
                                Now it is your turn to pick up a trumpet and prove your mettle or meet a fate like the rest.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* inventory */}
            {value === 1 && (
                <div className="kickingbrass-content">
                    <Box sx={{ margin: '30px' }}>
                        <Card sx={{ marginBottom: '20px', backgroundColor: '#180d25' }} className="card">
                            <CardContent>
                                <h3>Controls</h3>
                                <div className="controls-container">
                                    <ul className="dense-list">
                                        <li><p>[W] - Move Forward</p></li>
                                        <li><p>[A] - Move Left</p></li>
                                        <li><p>[S] - Move Backward</p></li>
                                        <li><p>[D] - Move Right</p></li>
                                        <li><p>[Space] - Jump</p></li>
                                        <li><p>[Cursor] - Aim</p></li>
                                        <li><p>[Ctrl] - Camera to Cursor</p></li>
                                        <li><p>[LMB] - Primary Attack</p></li>
                                        <li><p>[RMB] - Secondary Attack</p></li>
                                    </ul>
                                    <ul className="dense-list">
                                        <li><p>[Scroll Up] - Next Instrument</p></li>
                                        <li><p>[E] - Next Instrument</p></li>
                                        <li><p>[Scroll Down] - Prev Instrument</p></li>
                                        <li><p>[Q] - Prev Instrument</p></li>
                                        <li><p>[1] [2] [3] - Use Item</p></li>
                                        <li><p>[Esc] - Toggle Menu</p></li>
                                        <li><p>[I] - Toggle Inventory</p></li>
                                        <li><p>[F] - Interact</p></li>
                                    </ul>
                                </div>
                                <img src={controlsGif} className='glossary-image' alt="Controls GIF" />
                            </CardContent>

                        </Card>

                        <Card sx={{ marginBottom: '20px', backgroundColor: '#180d25' }} className="card">
                            <CardContent>
                                <h3>Inventory</h3>
                                <List dense>
                                    <p>
                                        Your inventory is divided into three main sections. The first section is shaped like a plus sign and is reserved for Equipment — these are your passive clothing items such as Headwear, Gloves, Chest/back pieces, Shoes, Trousers, and Trinkets like necklaces. Remember, only one piece of Equipment per type can be worn at a time.
                                    </p>

                                    <img src={inventory} alt="Inventory" className='glossary-image' />

                                    <p>
                                        The second section contains your Active items, which are the most frequently used. This section is always visible and includes three item boxes. You can use the items by pressing the default keys [1], [2], or [3]. Active items with cooldowns will show a timer until they're ready again, while consumables will disappear after use, freeing up their slot.
                                    </p>
                                    <p>
                                        The third section holds your Instruments, with space for up to three. To switch between them, use the scroll wheel or the default keys [Q] and [E]. When viewing the full inventory, you can rearrange items by dragging them to a new slot or remove them from your inventory by dragging them out into the surrounding empty space.
                                    </p>

                                </List>
                            </CardContent>
                        </Card>

                        <Card sx={{ marginBottom: '20px', backgroundColor: '#180d25' }} className="card">
                            <CardContent>
                                <h3>Dealing Damage</h3>
                                <List dense>
                                    <p>
                                        At the start of your journey, you have three hearts. Each enemy hit will cost you one heart, so guard them carefully! To increase your heart count, pick up a max heart. To replenish health, consume items like cookies. However, beware: if you lose all your hearts, you'll be sent back to your last checkpoint, as long as you have extra lives remaining. Run out of extra lives, and you'll have to start over from the beginning of your run.
                                    </p>

                                    <img src={hearts} alt="hearts" className='glossary-image' />
                                    <p>
                                        Sometimes, you might find a [glass heart]. Think of this as a temporary shield; it can take one hit before shattering. If you avoid taking damage, the [glass heart] will still vanish after a brief period. So make good use of it while it lasts!
                                    </p>
                                    <p>
                                        Understand the Notes and Shattering system:
                                        Enemy projectiles deal varying amounts of damage based on their musical notation. An [8th] note, the smallest projectile, inflicts half a heart of damage. These can be linked together by a beam, forming [2-8ths] or [3-8ths]. When hit by connected notes, the damage you take is cumulative of the number of [8th] notes connected. A [4th] note will damage one heart, a [half] note takes away two hearts, and a [whole] note will deplete four hearts.
                                    </p>
                                    <p>
                                        Projectiles follow different paths based on their originating instrument. While the lyre and trumpet fire in straight lines, the saxophone arcs its shots, and the violin's notes orbit around. Some weapons don't emit projectiles, offering unique strategies to discover.
                                    </p>
                                    <p>
                                        Shattering is a defensive technique allowing you to break projectiles. When shattered, they reverse direction and split into two, each inflicting half the original damage. For instance, shatter a [half] note to get two [4th] notes. Shatter connected [8th] notes, and they'll break into individual notes. However, [ghost notes]—like those from a violin—won't cause damage unless shattered. Upon impact with a shattered [ghost note], it transforms into damaging [8th] notes.
                                    </p>

                                </List>
                            </CardContent>
                        </Card>
                    </Box>
                </div>
            )}


            {/* glossary */}
            {value === 2 && (
                <div className="kickingbrass-content">
                    <Box sx={{ margin: '50px' }}>
                        <Card sx={{ backgroundColor: '#180d25' }} className="card">
                            <CardContent>
                                <h3>ENEMIES</h3>
                                {[
                                    { name: 'ROGER', description: 'Primary : Shoots [2 connected 8th] in a straight trajectory. Secondary : Shoots 5 [2 connected 8th] in sequence, in alternating directions and slows the player. Individual enemies can’t get hit more than once by each sequence.', image: roger },
                                    { name: 'TYBALT', description: 'Primary : Commands all minion units to fire. Secondary : Rearranges the formation of all minions you own. Passive : Summons two sousaphone minions.', image: tybalt },
                                    { name: 'BILL', description: 'Primary: Summons a spooky scary skeleton...', image: bill },
                                    { name: 'GOOSE', description: 'Primary: Shoots [2 connected 8th]...', image: goose },
                                    { name: 'GERHARD', description: 'Primary: Commands all minion units...', image: gerhard },
                                    { name: 'MICHAELA', description: 'Primary: Summons a spooky scary skeleton...', image: michaela },
                                    { name: 'CLYDE', description: 'Primary: Commands all minion units...', image: clyde },
                                    { name: 'MIKE (On holiday)', description: 'Primary: Summons a spooky scary skeleton...', image: mike },
                                    { name: 'GATLING GARY', description: 'Primary: Summons a spooky scary skeleton...', image: gary },
                                    { name: 'THE BRASSBARIAN', description: 'Primary: Summons a spooky scary skeleton...', image: brassarian },].map((item, index) => (
                                        <Card className='items-card' sx={{ mt: 2, mb: 2 }}>
                                            <CardContent>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs={12} sm={6} md={6} lg={4} order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
                                                        <img src={item.image} alt={item.name} className='glossary-image' />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={6} lg={4} order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
                                                        <Typography variant="h6" gutterBottom>{item.name}</Typography>
                                                        <Typography paragraph>{item.description}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    ))}

                                <h3>INSTRUMENTS</h3>

                                {[
                                    { name: 'LYRE', description: 'Primary: Shoots [2 connected 8th]...', image: lyre },
                                    { name: 'SNARE', description: 'Primary: Commands all minion units...', image: snare },
                                    { name: 'XYLOPHONE', description: 'Primary: Summons a spooky scary skeleton...', image: xylophone },
                                    { name: 'SAXOPHONE', description: 'Primary: Fires a lobbed [2 connected 8th]...', image: saxophone },
                                    { name: 'TRUMPET', description: 'Primary: Fires a [2 connected 8th] projectile...', image: trumpet },
                                    { name: 'VIOLIN', description: 'Primary: Swings the bow in melee range...', image: violin },
                                    { name: 'DOUBLE BASS', description: 'Primary: Swings the bass in an arc...', image: double_bass },
                                ].map((item, index) => (
                                    <Card className='items-card' sx={{ mt: 2, mb: 2 }}>
                                        <CardContent>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item xs={12} sm={6} md={6} lg={4} order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
                                                    <img src={item.image} alt={item.name} className='glossary-image' />
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={6} lg={4} order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
                                                    <Typography variant="h6" gutterBottom>{item.name}</Typography>
                                                    <Typography paragraph>{item.description}</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                ))}

                                <h3>ITEMS</h3>
                                <h4>Floog L. Horn</h4>
                                {[
                                    { name: 'ELECTRO LOOP', description: 'Active: Channels a beam of light...', image: electro_loop },
                                    { name: 'FRIGID LOOP', description: 'Active: Hurl a frozen spear...', image: frigid_loop },
                                    { name: 'CINDER LOOP', description: 'Active: Lobs a fireball...', image: cinder_loop },
                                    { name: 'SOUL LOOP', description: 'Active: Releases 5 homing souls...', image: soul_loop },
                                    { name: 'HEALING ALUMENT', description: 'Active: Heals [1 heart]...', image: healing_amulet },
                                    { name: 'BOTTLED STARLIGHT', description: 'Active: Creates an expanding domain...', image: bottled_starlight },
                                    { name: 'GOOSE FLUTE', description: 'Active: Command the goose to charge...', image: goose_flute },
                                    { name: 'RUSTY SHIELD', description: 'Active: Gain [1 glass heart]...', image: rusty_shield },
                                    { name: 'FLEET FEATHER', description: 'Active: Gain a burst of 100% increased movement speed...', image: fleet_feather },

                                    // Consumables
                                    { name: 'POTATO', description: 'Active: Halves damage taken...', image: potato },
                                    { name: 'CHILLI', description: 'Active: Doubles damage dealt and taken...', image: chilli },
                                    { name: 'SOUP', description: 'Active: Slowly heals [3 hearts]...', image: soup },
                                    { name: 'COOKIE', description: 'Active: Restores [1 heart]...', image: cookie },
                                    { name: 'PIZZA', description: 'Active: Restores [1 heart]...', image: pizza },
                                    { name: 'EGG', description: 'Active: Throws an egg...', image: egg },

                                    // Passive items
                                    { name: 'SUBSTITUTE DOLL', description: 'Passive: Upon taking lethal damage...', image: substitute_doll },
                                    { name: 'OVEN MITTENS', description: 'Passive: Every 5 Enemies you defeat...', image: oven_mittens },
                                    { name: 'GLASS FURNACE', description: 'Passive: Every time you defeat a unit...', image: glass_furnace },
                                    { name: 'THORN MANTLE', description: 'Passive: Taking damage retaliates...', image: thorn_mantle },
                                    { name: 'PIGGYBANK', description: 'Passive: If carried through one round...', image: piggybank },
                                    { name: 'GREED ARMOUR', description: 'Passive: Taking damage will instead...', image: gread_armour },
                                    { name: 'PLATE ARMOUR', description: 'Passive: Reduces all damage taken...', image: plate_armour },
                                    { name: 'BALLET SKIRT', description: 'Passive: Jumping makes you perform a pirouette...', image: ballet_skirt },
                                ].map((item, index) => (
                                    <Card className='items-card' sx={{ mt: 2, mb: 2 }}>
                                        <CardContent>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item xs={12} sm={6} md={6} lg={4} order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
                                                    <img src={item.image} alt={item.name} className='glossary-image' />
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={6} lg={4} order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
                                                    <Typography variant="h6" gutterBottom>{item.name}</Typography>
                                                    <Typography paragraph>{item.description}</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                ))}
                            </CardContent>
                        </Card>
                    </Box>
                </div >
            )
            }
        </div >
    );
}