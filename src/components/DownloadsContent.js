import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import './DownloadsContent.css';

export default function DownloadsContent() {
    return (
        <div className="downloads-content">
            <h1>Downloads</h1>
            <div className="card-content">
                <Card className="image-card" sx={{ backgroundColor: '#fffde6' }}>
                    <CardHeader
                        title="Limited Art test Version 0.1a Windows 64bit"
                        subheader="To play, extract the Zip and open KB_Art.exe"
                        titleTypographyProps={{
                            sx: { fontFamily: 'Chakra Petch' }
                        }}
                        subheaderTypographyProps={{
                            sx: { fontFamily: 'Chakra Petch' }
                        }}
                    />

                    <CardContent>
                        <Button
                            variant="contained"
                            href="https://storage.cloud.google.com/stepheight_downloads/KB_Art_01.zip"
                            download="KB_Art_01"
                            sx={{ backgroundColor: '#fffde6', '&:hover': { backgroundColor: '#fffde1' } }}
                        >
                            Download
                        </Button>
                    </CardContent>
                </Card>

                <Card sx={{ backgroundColor: '#fffde6' }} className="image-card">
                    <CardHeader
                        title="Version Alpha 0.06a Windows 64bit"
                        subheader="To play, extract the Zip and open KickingBrass.exe"
                        titleTypographyProps={{
                            sx: { fontFamily: 'Chakra Petch' }
                        }}
                        subheaderTypographyProps={{
                            sx: { fontFamily: 'Chakra Petch' }
                        }}
                    />

                    <CardContent>
                        <Button
                            variant="contained"
                            href="https://storage.cloud.google.com/stepheight_downloads/Kicking_Brass_v006a.zip"
                            download="Kicking_Brass_v006a"
                            sx={{ backgroundColor: '#fffde6', '&:hover': { backgroundColor: '#fffde1' } }}
                        >
                            Download
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
