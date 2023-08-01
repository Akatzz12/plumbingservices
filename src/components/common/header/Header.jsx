import React, { useState } from 'react';
import './header.css';
import { nav } from '../../data/Data';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navList, setNavList] = useState(false);

  const handleItemClick = () => {
    setNavList(false);
  };

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? 'small' : 'flex'}>
              {nav.map((list, index) => (
                <li key={index} onClick={handleItemClick}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span></span> Welcome
            </h4>
            <button className='btn1'>
              <a
                href='https://www.facebook.com/profile.php?id=100067602158601'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-linkedin'></i> Contact
              </a>
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
            {navList && (
              <ul>
                {nav.map((list, index) => (
                  <li key={index} onClick={handleItemClick}>
                    {list.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
