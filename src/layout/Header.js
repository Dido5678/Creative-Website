import React, { useState} from 'react';
import "../../src/App.css";
import "../assets/global.css";
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <header className='header' id="header-bg">
        <div className='header-container container'>
          <div className='header-body'>
            <div className='block-logo'>
              <img src="../icons/icon-layout.svg" className='logo' alt="icon" />
              <Link to="#" className="header-grid active">Grid</Link>
            </div>
            <nav className='nav'>
              <ul className='nav-list'>
                <li><Link to="/">How It Works</Link></li>
                <div className='list-style'>
                  <li><Link to="/whoweare">Who we are</Link></li>
                </div>
                <div className='list-style'>
                  <li><Link to="/whatwedo">What we do</Link></li>
                </div>
                <div className='list-style'>
                  <li><Link to="/contactus">Contact us</Link></li>
                </div>
              </ul>
            </nav>
            <div>
              <Link to="/signin" className='signin'>Sign In</Link>
            </div>
            <button className="header-burger" onClick={() => setIsOpen(!isOpen)}>
              <span className='burg-icon'>
                <Hamburger />
              </span> <span className='header-grid'>Grid</span>
            </button>
            <nav className={isOpen ? 'header-menu header-menu-active' : 'header-menu'}>
              {isOpen ?
                <ul className='header-list'>
                  <li><Link to="/">How It Works</Link></li>
                  <li><Link to="/whoweare">Who we are</Link></li>
                  <li><Link to="/whatwedo">What we do</Link></li>
                  <li><Link to="/contactus">Contact us</Link></li>
                </ul> : null}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;