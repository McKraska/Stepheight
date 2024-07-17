import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './TeamContent.css';

import image1 from '../images/startup_sam.jpg';
import image2 from '../images/startup_peter.jpg';
import image3 from '../images/startup_oskar.jpg';
import poster from '../images/publi_poster-1.png';

export default function TeamContent() {
    return (
        <Container>
            <Card className="team-card" sx={{ backgroundColor: '#fffde6', padding: '20px' }}>
                <div className="team-content">
                    <div className="image-row">
                        {/* SAM */}
                        <Card className="image-card" sx={{ backgroundColor: '#fffde6', margin: '10px' }}>
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
                                <Typography variant="body2" color="text.secondary" className="pronouns">
                                    Pronouns: He/Him
                                </Typography>
                                <Typography variant="body1" color="text.primary" className="bold-text">
                                    Composer, Sound Designer and Worldbuilder
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* PETER */}
                        <Card className="image-card" sx={{ backgroundColor: '#fffde6', margin: '10px' }}>
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
                                <Typography variant="body2" color="text.secondary" className="pronouns">
                                    Pronouns: He/Him
                                </Typography>
                                <Typography variant="body1" color="text.primary" className="bold-text">
                                    Programmer
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* OSKAR */}
                        <Card className="image-card" sx={{ backgroundColor: '#fffde6', margin: '10px' }}>
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
                                <Typography variant="body2" color="text.secondary" className="pronouns">
                                    Pronouns: They/Them
                                </Typography>
                                <Typography variant="body1" color="text.primary" className="bold-text">
                                    Visual Artist, Environment Artist, Web Developer
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Card>

            <Card className="poster-card" sx={{ backgroundColor: '#fffde6', padding: '20px', marginTop: '20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CardContent>
                            <Typography variant="h6" color="text.primary">
                                Dummy Text Title
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            component="img"
                            alt="poster"
                            image={poster}
                            className="poster"
                            sx={{ maxWidth: '100%', borderRadius: '10px' }}
                        />
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
}