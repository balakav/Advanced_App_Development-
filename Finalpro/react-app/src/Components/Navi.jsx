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
    <div className='welcome-6'>
      
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
                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} className='nav-bar-72-but'>Home</Button>
                <Link to="/Events">
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block',textDecoration:'none' }}>Events</Button>
                  </Link>
                  <Link to="/Cancle">

                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Cancelevent</Button>
                  </Link>
                <Link to="/Editevent">
                 <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>EditEvent</Button>
                  </Link>
                  <Link to="/Feedback">

                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Feedback</Button>
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
     </div>
     <br></br><br></br><br></br><br></br>
   
  
 
   
    </>
  );
}

export default ResponsiveAppBar;
