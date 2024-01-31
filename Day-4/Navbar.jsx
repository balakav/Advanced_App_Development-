import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/Logo.png'
import './Navbar.css'
import Slider from './Slider'
import Card from './Card'
 import { Link } from 'react-router-dom';
 import LanguageIcon from '@mui/icons-material/Language';
 import EmailIcon from '@mui/icons-material/Email';
 import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
 import InstagramIcon from '@mui/icons-material/Instagram';
 import XIcon from '@mui/icons-material/X';
 import YouTubeIcon from '@mui/icons-material/YouTube';

function ResponsiveAppBar() {
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
    <>
    <div className='welcome-1'>
      <AppBar position="static" sx={{ backgroundColor: 'black', float: 'left' }}>
        <Container maxWidth="xl">
          <div className='tool-1'>
            <Toolbar disableGutters>
              <img src={Logo} className='img-1-home' width={90} height={60}></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
                <Link to="/Events">
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block',textDecoration:'none' }}>Events</Button>
                  </Link>
                  <Link to="/Cancle">

                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Cancelevent</Button>
                  </Link>
                <Link to="/Editevent">
                 <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>EditEvent</Button>
                  </Link>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="BALAKAVI" src="/static/images/avatar/2.jpg" sx={{ backgroundColor: "lightblue", color: "black" }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <div className="pro-link-remove">


                  <Link to="/Profile"><MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" >Profile</Typography>
                  </MenuItem></Link>
                   <Link to="/">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" >Logout</Typography>
                    
                  </MenuItem>
                    </Link> 
                  </div>
                </Menu>
              </Box>
            </Toolbar>
          </div>
        </Container>
      </AppBar>
      <br></br><br></br><br></br><br></br><br></br><br></br>
    
   
     <h2 className='navbar-h2-1'>Effortless event management for Plan,<br></br>coordinate, and create memorable <br></br>experiences effortlessly.</h2>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="button-85" role="button">Get Started</button>
   </div>
     <br></br><br></br><br></br><br></br>
     <Slider/><br></br><br></br>
    <center>

     <div className="nav-box-2">
    <h1 className='nav-h2-2'>About As</h1><br></br><br></br><br></br>
    <img src={Logo} className='img-about-1'/>
   <p className="about-content-1">Welcome to "KAVI EVENTS", your premier partner in crafting extraordinary corporate events. With a dedicated team of event professionals, we specialize in seamless planning, innovative execution, and personalized experiences. Elevate your events with our expertise, attention to detail, and client-centric approach.Let us turn your vision into an unforgettable reality.</p>
    <div >
    </div>
     </div>
    </center>
    <br></br><br></br><br></br>
    <div>
   <Card/>
   </div>
   <br></br><br></br><br></br><br></br>

   <div className="navbar-row">
   
    <div className="nav-bar-row-h1">
    <h1 className="nav-bar-row-h1-h1">500+ projects</h1>
  </div>
  <div className="nav-bar-row-h1">
    <h1 className="nav-bar-row-h1-h1">70+ Company</h1>

  </div>
  <div className="nav-bar-row-h1">

    <h1 className="nav-bar-row-h1-h1">1K Employees</h1>
  </div>
  <div className="nav-bar-row-h1">
    <h1 className="nav-bar-row-h1-h1">100K People</h1>

  </div><br></br>
   </div><br></br><br></br><br></br>
 <div className="foot-navbar">
  <footer className="foot-box">
<h4 className='foot-h4'>&copy; 2024 Event Management. All rights reserved.</h4>
<div className="footer-items-1">

 <EmailIcon></EmailIcon>
 |<br></br><br></br>
 <LocalPhoneIcon></LocalPhoneIcon>|<br></br><br></br>
 <InstagramIcon></InstagramIcon>|<br></br><br></br>
 <XIcon></XIcon>|<br></br><br></br>
 <YouTubeIcon></YouTubeIcon>|<br></br><br></br>
  <LanguageIcon></LanguageIcon>
</div>
  
  </footer>
 </div>
   
    </>
  );
}

export default ResponsiveAppBar;
