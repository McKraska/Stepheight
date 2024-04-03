import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import './TeamContent.css';

import image1 from '../images/sam.jpg';
import image2 from '../images/peter.jpg';
import image3 from '../images/oskar.jpg';

export default function TeamContent() {
    return (
        <div className="team-content">
            <div className="image-row">
                {/* SAM */}
                <Card className="image-card">
                    <CardHeader
                        title="Sam Flentje"
                        subheader="@CheatinSloth"
                    />

                    <CardMedia
                        component="img"
                        alt="Sam"
                        height="240"
                        image={image1}
                    />

                    <CardContent>
                        <Typography variant="body" color="text.primary">
                            Composer, Sound Designer and Worldbuilder
                        </Typography>
                    </CardContent>
                </Card>

                {/* PETER */}
                <Card className="image-card">
                    <CardHeader
                        title="Peter Dunn"
                        subheader="@PeteTheN00b"
                    />

                    <CardMedia
                        component="img"
                        alt="Peter"
                        height="240"
                        image={image2}
                    />

                    <CardContent>
                        <Typography variant="body" color="text.primary">
                            Programmer
                        </Typography>
                    </CardContent>
                </Card>

                {/* OSKAR */}
                <Card className="image-card">
                    <CardHeader
                        title="Oskar Kraska McKone"
                        subheader="@McK"
                    />

                    <CardMedia
                        component="img"
                        alt="Oskar"
                        height="240"
                        image={image3}
                    />

                    <CardContent>
                        <Typography variant="body" color="text.primary">
                            Visual Artist, Environment Artist, Web Developer
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
