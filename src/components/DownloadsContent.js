import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import './DownloadsContent.css';

export default function DownloadsContent() {
    return (
        <div className="downloads-content">
            <div class="card-container">
                <div className="card-content">
                    <Card sx={{ marginBottom: '20px', backgroundColor: '#fffde6' }} className="image-card">
                        <CardHeader
                            title="Limited Art test Version 0.1a Windows 64bit"
                            subheader="To play, extract the Zip and open KB_Art.exe"
                        />

                        <CardContent>
                            <Button
                                variant="contained"
                                href="/path-to-your/download1.file"
                                download="filename1"
                            >
                                Download
                            </Button>
                        </CardContent>
                    </Card>

                    <Card sx={{ marginBottom: '20px', backgroundColor: '#fffde6' }} className="image-card">
                        <CardHeader
                            title="Limited Art test Version 0.1a Windows 64bit"
                            subheader="To play, extract the Zip and open KB_Art.exe"
                        />

                        <CardContent>
                            <Button
                                variant="contained"
                                href="/path-to-your/download1.file"
                                download="filename1"
                            >
                                Download
                            </Button>
                        </CardContent>
                    </Card>

                    <Card sx={{ marginBottom: '20px', backgroundColor: '#fffde6' }} className="image-card">
                        <CardHeader
                            title="Limited Art test Version 0.1a Windows 64bit"
                            subheader="To play, extract the Zip and open KB_Art.exe"
                        />

                        <CardContent>
                            <Button
                                variant="contained"
                                href="/path-to-your/download1.file"
                                download="filename1"
                            >
                                Download
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
