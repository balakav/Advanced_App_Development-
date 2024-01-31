import React, { useState } from 'react';
import {Button,TextField,Select,MenuItem,FormControl,InputLabel,} from '@mui/material';
import './Cancle.css';

const Bookevent = () => {

  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [qu, setQu] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
 

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleCompanyAddressChange = (event) => {
    setCompanyAddress(event.target.value);
  };

  const handleQuChange = (event) => {
    setQu(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  

  const handleSubmit = () => {
    if (validateForm()) {
      // Add your logic for form submission here
      console.log("Form submitted successfully!");
    } else {
      console.log("Form validation failed. Please fill in all required fields.");
    }
  };


  return (
    <>
      <div className='b-e-b-1'>
        <center>
          <div className="cancle-1">
            <h1 className='h1-book-event'>Cancle The Event</h1>
            <TextField
              label="Email"
              sx={{ width: '300px' }}
              required
              value={email}
              onChange={handleEmailChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <TextField
              label="Company Name"
              sx={{ width: '300px' }}
              required
              value={companyName}
              onChange={handleCompanyNameChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <br></br>
            <br></br>

            <TextField
              id="outlined-textarea"
              label="CompanyAddress"
              multiline
              required
              sx={{
                width: '300px',
              }}
              value={companyAddress}
              onChange={handleCompanyAddressChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <TextField
              label="MobileNumber"
              sx={{ width: '300px' }}
              required
              value={mobileNumber}
              onChange={handleMobileNumberChange}
            />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <br></br><br></br>
            <br></br>
            <div className='input-div-event'>
            Event date
            <input type='date' className='input-book-1'></input></div> &nbsp;&nbsp;&nbsp;&nbsp;
            <div className='input-div-1-event'>
            Event Time
            <input type='time' className='input-book-2'></input></div>
            <br></br>
            

            <br></br><br></br>


            <TextField
              id="outlined-textarea"
              label="Any Reasons"
              multiline
              required
              sx={{
                width:"650px",
              
              }}
              value={qu}
              onChange={handleQuChange}
            />

            <br></br><br></br>

            <Button
              size="small"
              color="success"
              variant="contained"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </center>
      </div>
    </>
  );
};

export default Bookevent;
