import React from 'react';
import './First.css'; 

const SlideNavbar = () => {
  return (
    <body className='body-login-1'>
     
   <div className='box-1'>

   </div>
    
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" name="txt" placeholder="User name" required />
          <input type="email" name="email" placeholder="Email" required/>
          <input type="password" name="pswd" placeholder="Password" required/>
          <button className='but-1'>Sign up</button>
        </form>
      </div>

      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button className='but-2'>Login</button>
        </form>
      </div>
    </div>
    </body>
  );
};

export default SlideNavbar;
