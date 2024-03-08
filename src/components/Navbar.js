import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Navbar.css';
import logo from '../images/logo_7.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['DOWNLOAD', 'GLOSSARY', 'UPDATES'];

export default function Navbar() {
  return (
    <div id='Nav'>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
              <Link to="/">
                <img src={logo} alt="Logo" style={{ cursor: 'pointer' }} />
              </Link>
            </Box>

            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.toLowerCase()}`}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
