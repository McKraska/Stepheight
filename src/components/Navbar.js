import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo_nav.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['KICKING_BRASS', 'DOWNLOADS', 'UPDATES'];

export default function Navbar() {
  return (
    <div id='Nav'>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />

            <Box component="section" className="nav-items">
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.replace('_', '').toLowerCase()}`}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.replace('_', ' ')}
                </Button>
              ))}
            </Box>
            <label htmlFor="nav-toggle" className="nav-toggle-label">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

