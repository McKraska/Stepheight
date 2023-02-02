import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from '../logo_7.png';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { BrowserRouter, Route, Link } from "react-router-dom";




import Button from '@mui/material/Button';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div id='Nav'>

            <a id='logo' href="https://google.com">
                <img src={logo} alt="Stepheight" />
            </a>

            <div id='Nav_Selection'>
                <a href=''>KICKING BRASS</a>
                <a href='Patch.js'>DOWNLOAD</a>
                <a>GLOSSARY</a>
                <a>DEV LIBRARY</a>
            </div>

            {/*  

            <AppBar position="fixed" sx={{ height: 'fit-content', backgroundColor: 'transparent', boxshadow: '0px 0px 0px 0px rgba(0,0,0,0)', }}>

                <Container sx={{ Width: "10%", }}>

                    <Toolbar disableGutters>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >

                            </IconButton>

                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'darkgrey', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>


                    </Toolbar>
                </Container>
            </AppBar>
            */}

        </div >

    )
}