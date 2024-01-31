import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Adminhome.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>

        <div className="admin-home">
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Event Management Admin
        </Typography>


        <Button color="inherit">View Bookings</Button>
        <div className="ad-1">
        <Link to="/Createevent">
          
          <Button color="inherit" className='admin-home-but1'>Create Events</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
    <br></br><br></br>
      <h1 className='admin-h1'>Welcome Balakavi !</h1>
    </div>

    </>
  );
};

export default Navbar;
