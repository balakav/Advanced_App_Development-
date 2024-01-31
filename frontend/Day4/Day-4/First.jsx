
import React from 'react';
import { Link } from 'react-router-dom';
import './First.css';

const SlideNavbar = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login logic goes here");
  };

  return (
    <div className='body-login-1'>
      <div className='box-1'></div>

      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true" className='f-l'>
              Sign up
            </label>
            <input type="text" name="txt" placeholder="User name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <Link to="/Home">
              <button className='but-1'>Sign up</button>
            </Link>
          </form>
        </div>

        <div className="login">
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="chk" aria-hidden="true" className='f-l'>
              Login
            </label>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <Link to='/Home'>
              <button className='but-2' type="submit">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SlideNavbar;

