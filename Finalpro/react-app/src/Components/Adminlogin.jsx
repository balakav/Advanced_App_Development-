import React from 'react';
import './Adminlogin.css'; 
import { Link } from 'react-router-dom';

const SlideNavbar = () => {
  return (
    <body className='body-login-11'>
     
   <div className='box-11'>

   </div>
    
    <div className="main1">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true" className='f-l1'>
            Sign up
          </label>
          <input type="text" name="txt" placeholder="User name" required />
          <input type="email" name="email" placeholder="Email" required/>
          <input type="password" name="pswd" placeholder="Password" required/>
          <Link to="/Adminhome"><button className='but-11'>Sign up</button></Link>
        </form>
      </div>

      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true" className='f-l1'>
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button className='but-21'>Login</button>
        </form>
      </div>
    </div>
    </body>
  );
};

export default SlideNavbar;





