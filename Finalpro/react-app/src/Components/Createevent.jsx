// import React from 'react'
// import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon, Button} from '@mui/material'
// import { AccountBox,  Logout, AddCircle} from '@mui/icons-material';
// import {Link} from 'react-router-dom'
// import { useState} from 'react';
// import Footer from './Footer';
// import Eventform from './Eventform';
// import './Createevent.css'
// function AdEvents() {

//   const[open1,setOpen] = useState('');
//   const[open2,setOpen2] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [eventName, setEventName] = useState('');
  
//   const handleOpen = (eventName) => {
//       setOpen(true);
//       setEventName(eventName);
//   }
//   const handleOpen2 = () => {
//       setOpen2(true);
//   }

//   const [events, setEvents] = useState([
//     // Sample event data
//     { id: 1, name: 'conference', themeCost: 'Rs. 100', rating: 4, description: 'Yeah! Sample description for Event 1' },
//     { id: 2, name: 'Event 2', themeCost: 'Rs. 100', rating: 4, description: 'Yeah! Sample description for Event 1' },
//     { id: 3, name: 'Event 3', themeCost: 'Rs. 100', rating: 4, description: 'Yeah! Sample description for Event 1' },
//     { id: 4, name: 'Event 4', themeCost: 'Rs. 100', rating: 4, description: 'Yeah! Sample description for Event 1' },
//     // Add more events as needed
//   ]);

//   const filteredEvents = events.filter(event =>
//     event.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );


//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Handle the search submission (e.g., send search query to the server)
//     console.log('Search term submitted:', searchTerm);
//   };

//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//       setAnchorEl(null);
//     };
//     return (
//       <div className="be-overall">
      
//         <div className='ad-h1'>
//             <h2>The Events</h2>
//         </div>
//         <form className="ad-search-form" onSubmit={handleSearchSubmit}>
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Type here to Search...."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
        
//       </form>
//       <div className='ad-add'>
//             <div className="ad-pointer" onClick={handleOpen2}>
//             <AddCircle style={{ fontSize: 35, marginTop:0 }}/><h2 className='ad-poih'>Add Event</h2>
//             <AddCircle style={{ fontSize: 35, marginTop:0 ,color:"GrayText" }}/><h2 className='ad-poih'>Edit Event</h2>
//             <AddCircle style={{ fontSize: 35, marginTop:0 ,color:"Menu"}}/><h2 className='ad-poih'>Delete Event</h2>
//       </div> 
//       </div>    
//         {/* {open2 && (<AdEventsBox />)} */}

//       {filteredEvents.length === 0 && (
//       <div className="be-none">
//         <img className="be-noevents" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
//         <h3>Oops! No Events for Now...</h3>
//         <p>Use this space for managing your events!</p>
//       </div>
//         )}
      
//         <br></br><br></br>
        

//         <div className='be-grid'>
//         {filteredEvents.map(event => (
//           <div key={event.id} onClick={() => handleOpen(event.name)}>
//             <section className="pb-5">
        
//             <div className="container text-center" >
//             <div className="gallery-wrapper">
//                 <div className="grid-sizer col-lg-4 col-md-6"></div>

//                 <div className="col-lg-4 col-md-6 grid-item mb-4">
//                 <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://www.heliosevent.in/wp-content/uploads/2023/02/7-Unique-Corporate-Event-Ideas-for-2023.png" alt="" />
//                 <h2 className="h4">{event.name}</h2>
//                 <p className="small text-muted font-italic">Theme cost: {event.themeCost}</p>
//                 <p className="small text-muted font-italic">Rating: {event.rating}</p>
//                 <p className="small text-muted font-italic">Description: {event.description}</p>
                
//                 </div>
               

//             </div>
//             </div>
//         </section> 
        
//        </div>
//        ))}
//         {/* {open1 && (<EventBox eventName={eventName} />)}  */}
//         {open2 && (<Eventform />)}
            

        
//         </div>
//       <br></br>

//         </div>
       
        
//   )
// }

// export default AdEvents


















import React from 'react'
import './Createevent.css'; 
import Eventform from './Eventform'
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon, Card} from '@mui/material'
import { AccountBox,  Logout, AddCircle} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { useState,useEffect} from 'react';
import Footer from './Footer';

// import Editform from './Editform';

import axios from 'axios';

function AdEvents() {

  const[open1,setOpen] = useState('');
  const[open3,setOpen3] = useState('');
  const[open2,setOpen2] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventName1, setEventName1] = useState('');
  
  const handleOpen = (eventName) => {
      setOpen(true);
      setEventName(eventName);
  }

  const handleClose = () => {
      setOpen(false);
  }

  
  const handleOpen2 = () => {
      setOpen2(true);
  }
  const handleOpen3 = (eventName1) => {
      setEventName1(eventName1);
      setOpen3(true);
  }
  const handleClose1 = () => {
      setOpen3(false);
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/products/map/event/getevents")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const filteredEvents = data;



    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search submission (e.g., send search query to the server)
    console.log('Search term submitted:', searchTerm);
  };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    return (
      <div className="be-overall">
      <div className='home-b'>
        <nav className='home-nav'>
          <div className="menu">
            <div className="logo">
              
            </div>
            <ul className='home-ul'>
                {/* <li><a href="/AdHome">Home</a></li> */}
                {/* <li><a className="active1" href="/AdEvents">All Events</a></li> */}
                {/* <li><a href="">Food Menu</a></li> */}
                {/* <li><a href="">Add Ons</a></li> */}
                {/* <li><a href="/Status">User Bookings</a></li> */}
                {/* <li><a href="#">About us</a></li> */}
                {/* <li><a href="#">Contact</a></li> */}

              <Box sx={{ flexGrow: 0 }}>
                       <li>
                        <IconButton
                          onClick={handleClick} sx={{ p: 0}}
                          size="small"
                        >
                        {/* <Avatar sx={{ width: 45, height: 45 ,bgcolor : "black" ,marginLeft:"10px" , marginBottom:"-10px", marginTop:"-8px" }}></Avatar> */}
                        </IconButton></li></Box>
                  </ul>
                  <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            {/* <Avatar sx={{ width: 45, height: 45 ,bgcolor : "black"}}/> <b>My Account</b> */}
          </MenuItem>
          <Divider />
         
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AccountBox fontSize="small" />
            </ListItemIcon>
            <b>Profile</b>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon><Link to="/">
            <div className='logout'><b>Logout</b></div></Link>
          </MenuItem>
        </Menu>
          
          </div>
        </nav>
        <div className='ad-h1'>
            <h2>POST THE EVENTS</h2>
        </div>
        <form className="ad-search-form" onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Type here to Search...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
       <br></br>
       {/* <button className="search-button" type="submit">
          <b>Search</b>
        </button> */}
      </form>
      <div className='ad-add'>
            <div className="ad-pointer" onClick={handleOpen2}><br></br><br></br>
            <AddCircle style={{ fontSize: 35, marginTop:0 }}/><h2 className='ad-poih'>Add Themes</h2><br></br>
      </div> 
      </div>    
        {/* {open2 && (<AdEventsBox />)} */}

      {filteredEvents.length === 0 && (
      <div className="be-none">
        <img className="be-noevents" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
        <h3>Oops! No Events for Now...</h3>
        <p>Use this space for managing your events!</p>
      </div>
        )}
      
        <br></br><br></br>
        

        <div className='be-grid1'>
        {filteredEvents.map(event => (
          <div key={event.id}>
            <section className="pb-51">
        
            <div className="container text-center" >
       
            <div className="gallery-wrapper1">
              
                <div className="grid-sizer col-lg-4 col-md-6"></div>
                  
                <div className="col-lg-4 col-md-6 grid-item1 mb-4">
                <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src={event.imgUrl} alt="" />
                <h2 className="h4">{event.eventName}</h2>
                <p className="small text-muted font-italic">Description: {event.eventDesc}</p>
                <button onClick={() => handleOpen3(event.name)} className='ab-up'>Update</button><button onClick={() => handleOpen(event.name)} className='ab-del'>Delete</button>
                </div>

            </div>
            </div>
        </section> 
       </div>
       ))}
       {/* {open1 && (<AdDelEventBox eventName={eventName} handleClose={handleClose} />)}  */}
        {/* {open3 && (<AdUpEventBox eventName1={eventName1} handleClose1={handleClose1}/>)}  */}
        {open2 && (<Eventform/>)}
            

        
        </div>
      <br></br>

      
        </div>
       
        
      </div>
  )
}

export default AdEvents