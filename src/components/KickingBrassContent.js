import React, { useState } from 'react';
import Banner from './Banner'
import { Typography, List, Card, Tabs, Tab, Grid, CardContent, Box } from '@mui/material';
import './KickingBrassContent.css';

import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';

import kb_logo from '../images/kicking_brass_logo.png';
import kb_banner from '../images/menu.png';
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

export default function KickingBrassContent() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='kb-canvas'>
            <div className="video-container">
                <Banner
                    imageSrc1={kb_banner}
                    imageSrc2={kb_logo}
                />
            </div>

            <Tabs
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "#a16edd"
                    }
                }}
            >
                <Tab label="About" />
                <Tab label="Download" />
                <Tab label="Tutorial" />
                <Tab label="Glossary" />
            </Tabs>

            <Box sx={{ width: '100%', p: 3 }}>
                {value === 0 && <AboutTab />}
                {value === 1 && <DownloadTab />}
                {value === 2 && <TutorialTab />}
                {value === 3 && <GlossaryTab />}
            </Box>
        </div>
    );
}

function AboutTab() {
    return (
        <Card sx={{ backgroundColor: '#180d25', boxShadow: 0 }} className="card">
            <CardContent>
                <h1>THE WORLD OF KICKING BRASS</h1>

                <h2>Your family is missing,</h2>
                <h2>your village has been ransacked,</h2>
                <h2>and hostile forces surround you on all sides.</h2>

                <div className='sprite-row'>
                    <img src={goose} alt="goose" className="sprite" />
                    <img src={mike} alt="mike" className="sprite" />
                    <img src={gary} alt="gary" className="sprite" />
                    <img src={michaela} alt="michaela" className="sprite" />
                    <img src={gerhard} alt="gerhard" className="sprite" />
                    <img src={brassarian} alt="brassarian" className="sprite" />
                </div>

                <p>
                    King Brasshoven’s troops march upon the land you once called home and you’re the only one who can beat them back!
                </p>

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

                <h1>THE COLOSSEUM</h1>

                <img src={kb_img1} alt="Colosseum" className='img1' />

                <h2>The gates to King Brasshoven’s colosseum open once again!</h2>

                <h3>
                    For centuries only the strongest, bravest, and dumbest warriors from all over the continent have made their way to these sacred grounds in order to prove themselves (and/or die horrifically).
                </h3>

                <p>
                    Each year a champion has left their mark on the Empire of Brass and each year more contestants try to do the same.
                </p>

                <p>
                    Face waves upon waves of enemies, each more challenging than the last.
                </p>

                <p>
                    Luckily a few totally trustworthy vendors are at your side, ready to supply you with weapons and equipment. So far very few have made it to the top.
                </p>

                <p>
                    Now it is your turn to pick up a trumpet and prove your mettle or meet a fate like the rest.
                </p>
            </CardContent>
        </Card>
    );
}

function DownloadTab() {
    const bucketName = "stepheight_downloads";
    const urlKB_Art_01 = `https://storage.googleapis.com/storage/v1/b/${bucketName}/o/KB_Art_01.zip?alt=media`;
    const urlKicking_Brass_v006a = `https://storage.googleapis.com/storage/v1/b/${bucketName}/o/Kicking_Brass_v006a.zip?alt=media`;

    return (
        <Card sx={{ backgroundColor: '#180d25', boxShadow: 0, padding: '20px' }} className="card">
            <h2>DOWNLOADS</h2>
            <Card className="card" sx={{ backgroundColor: '#201230', boxShadow: 0, marginBottom: '20px' }}>
                <CardHeader
                    title="Limited Art test Version 0.1a Windows 64bit"
                    subheader="To play, extract the Zip and open KB_Art.exe"
                    className="kickingbrass-cardheader"
                />
                <CardContent>
                    <Button
                        className="kickingbrass-button"
                        href={urlKB_Art_01}
                        download="KB_Art_01"
                    >
                        Download
                    </Button>
                </CardContent>
            </Card>

            <Card className="download-card" sx={{ backgroundColor: '#201230', boxShadow: 0 }}>
                <CardHeader
                    title="Version Alpha 0.06a Windows 64bit"
                    subheader="To play, extract the Zip and open KickingBrass.exe"
                    className="kickingbrass-cardheader"
                />
                <CardContent>
                    <Button
                        className="kickingbrass-button"
                        href={urlKicking_Brass_v006a}
                        download="Kicking_Brass_v006a"
                    >
                        Download
                    </Button>
                </CardContent>
            </Card>
        </Card>
    );
}

function TutorialTab() {
    return (
        <Card sx={{ backgroundColor: '#180d25', boxShadow: 0, padding: '20px' }} className="card">
            <h2>CONTROLS</h2>
            <Card sx={{ backgroundColor: '#201230', boxShadow: 0 }} className="card">
                <CardContent>
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
            <h2>INVENTORY</h2>
            <Card sx={{ backgroundColor: '#201230', boxShadow: 0, marginTop: '20px' }} className="card">
                <CardContent>

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

            <h2>DEALING DAMAGE</h2>
            <Card sx={{ marginBottom: '20px', backgroundColor: '#201230', boxShadow: 0 }} className="card">
                <CardContent>

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
        </Card>
    );
}

function GlossaryTab() {
    return (
        <Card sx={{ backgroundColor: '#180d25', boxShadow: 0 }} className="card">
            <h2>ENEMIES</h2>
            <CardContent>
                {[
                    { name: 'ROGER', description: 'Shoots [8th] notes at you. Waiting for a promotion.', image: roger },
                    { name: 'TYBALT', description: 'Either stands in front of units to protect them or charges at you with a sharpened oboe. The crash cymbal shield blocks damage this unit would take, but can be destroyed, leaving the unit stunned with its guard down.', image: tybalt },
                    { name: 'BILL', description: 'Fires a lobbed [4th] projectile that explodes into [8th] when it lands. Tries to predict your movement.', image: bill },
                    { name: 'GOOSE', description: 'Honk.', image: goose },
                    { name: 'GERHARD', description: 'Fires a lobbed [4th] at the player which when it lands will explode into an enormous slow moving shockwave of [8th].', image: gerhard },
                    { name: 'MICHAELA', description: 'The fastest hand in the west. Michaela uses her impressive guitar solo skills to smite those she faces in combat with lightning from above! In her free time she enjoys finding ways to make her heels even pointier.', image: michaela },
                    { name: 'CLYDE', description: 'The fastest hat in the west. Clyde once slipped and fell onto a cymbal headfirst and he hasn\'t stopped spinning on it since! While spinning Clyde is immune to projectiles and even reflects them back, his constantly rotating state means that his steering leaves much to be desired. This might even leave you with an opening!', image: clyde },
                    { name: 'MIKE (On holiday)', description: 'Creates shockwaves which either cause other nearby enemies to be healed for [1 heart] over 5 seconds, or causes other nearby enemies to immediately attack.', image: mike },
                    { name: 'GATLING GARY', description: 'Literally the big guns. Gatling moves slowly and carries an oversized tuba which shoots large groups of projectiles. Each attack pushes him backwards. If he runs into a wall he takes a small amount of damage and is stunned briefly. If desperate, he may feel the need to overcharge his weapon.', image: gary },
                    { name: 'THE BRASSBARIAN', description: 'Brings down the lightning. Brassbarian rampages around with a double bass larger than you. He chases you around with leaps, swings and slams, and will rain down more lightning on you as the fight progresses. Although many people come to watch his deadly bass solo, few have the luxury of surviving it.', image: brassarian }].map((item, index) => (
                        <Card key={item.name + index} className='items-card' sx={{ mt: 2, mb: 2, backgroundColor: '#201230', boxShadow: 0, marginTop: '20px' }}>
                            <CardContent>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
                                        <img src={item.image} alt={item.name} className='glossary-image' />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
                                        <h3>{item.name}</h3>
                                        <Typography paragraph>{item.description}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}

                <h2>INSTRUMENTS</h2>

                {[
                    { name: 'LYRE', description: 'Primary: Shoots [2 connected 8th] in a straight trajectory. Secondary: Shoots 5 [2 connected 8th] in sequence, in alternating directions and slows the player. Individual enemies can’t get hit more than once by each sequence.', image: lyre },
                    { name: 'SNARE', description: 'Primary: Commands all minion units to fire. Secondary: Rearranges the formation of all minions you own. Passive: Summons two sousaphone minions.', image: snare },
                    { name: 'XYLOPHONE', description: 'Primary: Summons a spooky scary skeleton. Secondary: Detonates all minions you own.', image: xylophone },
                    { name: 'SAXOPHONE', description: 'Primary: Fires a lobbed [2 connected 8th]. The value (damage) of the note increases to [quarter] if the attack was charged. Secondary: Lobs a projectile that pulls units towards it. The radius increases if the attack was charged.', image: saxophone },
                    { name: 'TRUMPET', description: 'Primary: Fires a [2 connected 8th] projectile and accumulates water. If charged you shoot a [triplet]. Secondary: Releases all accumulated water in a burst of damage and shatters projectiles. The water remains as a puddle which slows enemy units. The more water was accumulated, the stronger the effects of this move are.', image: trumpet },
                    { name: 'VIOLIN', description: 'Primary: Swings the bow in melee range. Capable of shattering projectiles. Secondary: Creates [3 connected 8th] projectiles that orbit you. Every second projectile spawns as a ghost projectile that can be shattered, but will not deal damage while orbiting.', image: violin },
                    { name: 'DOUBLE BASS', description: 'Primary: Swings the bass in an arc in front of you. Cancel jumping to slam the ground below your current position. Damage increases depending on the height you start the slam from. Secondary: Leap forward and into the air.', image: double_bass },
                ].map((item, index) => (
                    <Card key={item.name + index} className='items-card' sx={{ mt: 2, mb: 2, backgroundColor: '#201230', boxShadow: 0, marginTop: '20px' }}>
                        <CardContent>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
                                    <img src={item.image} alt={item.name} className='glossary-image' />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
                                    <h3>{item.name}</h3>
                                    <Typography paragraph>{item.description}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                ))}

                <h2>ITEMS</h2>

                {[
                    { name: 'ELECTRO LOOP', description: 'Active: Channels a beam of light which follows your cursor. After 1 second it strikes the ground, dealing [1] damage. Cooldown: 7 Seconds.', image: electro_loop },
                    { name: 'FRIGID LOOP', description: 'Active: Hurl a frozen spear in the target direction, piercing enemies for [1] damage and freezing them for 2 seconds. Cooldown: 12 Seconds.', image: frigid_loop },
                    { name: 'CINDER LOOP', description: 'Active: Lobs a fireball towards the targeted location, erupting in a fiery explosion when it touches the ground, knocking away nearby enemies and dealing [1.5] damage to them. Cooldown: 6 Seconds.', image: cinder_loop },
                    { name: 'SOUL LOOP', description: 'Active: Releases 5 homing souls which chase down nearby enemies, dealing [1] damage and fearing them for 2 seconds, causing them to run away from you. Doesnt have a cooldown but instead recharges by defeating 5 enemies.', image: soul_loop },
                    { name: 'HEALING ALUMENT', description: 'Active: Heals [1 heart]. Has a chance to be damaged when used. After being damaged 3 times it will break, disappearing completely. If it is only damaged but not broken it can be repaired at Jerome. Cooldown: 5 Seconds.', image: healing_amulet },
                    { name: 'BOTTLED STARLIGHT', description: 'Active: Creates an expanding domain in which stars rain down upon up to 5 enemies every 0.75 seconds. These stars deal [1] damage to whoever they directly strike, and [0.5] damage to anyone near them. Cooldown: 18 Seconds.', image: bottled_starlight },
                    { name: 'GOOSE FLUTE', description: 'Active: Command the goose to charge towards the targeted location, shattering projectiles along the way and dealing [1] damage and knocking back enemies it passes through. Passive: An invulnerable goose follows you around, attacking nearby enemies with a lobbed [quarter note] every 3 seconds.', image: goose_flute },
                    { name: 'RUSTY SHIELD', description: 'Active: Gain [1 glass heart] for 3 seconds. Cooldown: 8 Seconds.', image: rusty_shield },
                    { name: 'FLEET FEATHER', description: 'Active: Gain a burst of 100% increased movement speed, decaying over 3 seconds. Cooldown: 10 Seconds.', image: fleet_feather },
                    { name: 'POTATO', description: 'Active: Halves damage taken for 20 seconds. Consumed on use. Does not stack.', image: potato },
                    { name: 'CHILLI', description: 'Active: Doubles damage dealt and taken for 15 seconds. Consumed on use. Does not stack.', image: chilli },
                    { name: 'SOUP', description: 'Active: Slowly heals [3 hearts] over 15 seconds. Consumed on use. Does not stack.', image: soup },
                    { name: 'COOKIE', description: 'Active: Restores [1 heart] on use. Consumed on use.', image: cookie },
                    { name: 'PIZZA', description: 'Active: Restores [1 heart] on use. Consumed after using all 8 slices. Cooldown: 11.', image: pizza },
                    { name: 'EGG', description: 'Active: Throws an egg at the target location which breaks into [three eighth notes] upon striking the ground. Destroyed on use.', image: egg },
                    { name: 'SUBSTITUTE DOLL', description: 'Passive: Upon taking lethal damage will sacrifice itself to fully heal you.', image: substitute_doll },
                    { name: 'OVEN MITTENS', description: 'Passive: Every 5 Enemies you defeat create a cookie in your inventory. Cookies created this way have a low chance of spawning as a pizza instead', image: oven_mittens },
                    { name: 'GLASS FURNACE', description: 'Passive: Every time you defeat a unit you gain half a glass heart that lasts for 4 seconds.', image: glass_furnace },
                    { name: 'THORN MANTLE', description: 'Passive: Taking damage retaliates with a burst of projectiles.', image: thorn_mantle },
                    { name: 'PIGGYBANK', description: 'Passive: If carried through one round, explodes in a rain of sheet music (30 sheets).', image: piggybank },
                    { name: 'GREED ARMOUR', description: 'Passive: Taking damage will instead drain your sheet music, if possible. You lose 10 sheets per point of [1 heart] damage taken. Half of the money lost will drop onto the floor near you.', image: gread_armour },
                    { name: 'PLATE ARMOUR', description: 'Passive: Reduces all damage taken by [quarter heart] to a minimum of [quarter heart].', image: plate_armour },
                    { name: 'BALLET SKIRT', description: 'Passive: Jumping makes you perform a pirouette when you land which shoots a spiral of [8th] projectiles around you.', image: ballet_skirt },
                ].map((item, index) => (
                    <Card key={item.name + index} className='items-card' sx={{ mt: 2, mb: 2, backgroundColor: '#201230', boxShadow: 0, marginTop: '20px' }}>
                        <CardContent>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
                                    <img src={item.image} alt={item.name} className='glossary-image' />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
                                    <h3>{item.name}</h3>
                                    <Typography paragraph>{item.description}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
    );
}