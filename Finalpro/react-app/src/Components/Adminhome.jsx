import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Adminhome.css'
import { Link } from 'react-router-dom';
import { Block } from '@mui/icons-material';
const Navbar = () => {
  return (
    <>

        <div className="admin-home">
    <AppBar position="static" >
      <Toolbar >
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

        <Link to="/Viewbooking">

        <Button color="inherit" className='ah-button-1'>View Bookings</Button>
        </Link>
        <div className="ad-1">
        <Link to="/Createevent" className='admin-home-but1'>
          
          <Button color="inherit" >Create Events</Button>
          </Link>
        <Link to="/Vfeed" className='admin-home-but1'>
          
          <Button color="inherit" >View Feedbacks</Button>
          </Link>
        </div>
      <Avatar>B</Avatar>
      </Toolbar>
    </AppBar>
    <br></br><br></br>
    <marquee className="marquee-1">Good Morning BALAKAVI</marquee>
      <h1 className='admin-h1'>Welcome Balakavi !</h1>
    <h1>Welcome to the Event Management System Admin Panel</h1><br></br>
     <p className='adminhome-par1'>This is your admin home page. Manage your events efficiently!</p>
    </div>

    </>
  );
};

export default Navbar;
