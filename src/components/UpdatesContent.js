import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import './UpdatesContent.css';

export default function UpdatesContent() {
    return (
        <div className="updates-content">
            <Typography variant="h4" gutterBottom>Patch Notes</Typography>

            <Card sx={{ marginBottom: '20px', backgroundColor: '#fffde6' }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Kicking Brass 0.06a</Typography>
                    <Typography variant="h6">General Changes</Typography>
                    <Typography paragraph>Shadow beneath the player is now clearer</Typography>
                    <Typography paragraph>More improvements to UI</Typography>

                    <Typography variant="h6">Enemy Changes</Typography>
                    <Typography paragraph>The initial projectile of the heavy brass (not the small shockwave ones) now takes 1.4-2.4 seconds to land instead of 0.7 to 1.7</Typography>
                    <Typography paragraph>Glass furnace now only gives half a glass heart on kill</Typography>

                    <Typography variant="h6">Bugfixes</Typography>
                    <Typography paragraph>Gatling Laser verticality has been fixed, making it much easier to jump over</Typography>
                    <Typography paragraph>The hitbox around gatling during his laser (not the hitbox of the laser itself) has been decreased by a bit more than 10%</Typography>
                    <Typography paragraph>Fixed a bug where pickups and money could get stuck beneath the floor</Typography>
                    <Typography paragraph>Fixed a bug where sometimes the game timer would update every 2 seconds instead of every second</Typography>
                    <Typography paragraph>Fixed a bug where the click hitboxes to swap left and right on the upgrade shop were smaller than intended</Typography>
                </CardContent>
            </Card>

            <Card sx={{ marginBottom: '20px', backgroundColor: '#fffde6' }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Kicking Brass 0.06</Typography>
                    <Typography variant="h6">General Changes</Typography>

                    <Typography variant="h6">Player Changes</Typography>
                    <Typography paragraph>added a visual effect on spawn and death</Typography>

                    <Typography variant="h6">Enemy Changes</Typography>
                    <Typography paragraph>Heavy brass now has a 4 second cooldown...</Typography>

                    <Typography variant="h6">Map Changes</Typography>
                    <Typography paragraph>Environmental terrain changes have been added to waves 11-19</Typography>
                </CardContent>
            </Card>
        </div>
    );
}
