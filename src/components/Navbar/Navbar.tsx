import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button as MUIButton } from '@mui/material';
import logo from '../../assets/logo.svg';
import Button from '../Button/Button';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      <AppBar position="static" className="App-header" elevation={0}>
        <Toolbar className="toolbar">
          <img src={logo} alt="logo" className="logo" />
          <Box className="nav-container">
            <nav>
              <ul>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About Us</NavLink></li>
                <li><NavLink to="/features" className={({ isActive }) => isActive ? "active-link" : ""}>Features</NavLink></li>
                <li><NavLink to="/subscriptions" className={({ isActive }) => isActive ? "active-link" : ""}>Subscriptions</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact Us</NavLink></li>
              </ul>
            </nav>
            <Box className="nav-right">
              <NavLink to="/login">Login</NavLink>
              <MUIButton color="inherit" className="button-demo">
                <Button text="Book a Demo" />
              </MUIButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

