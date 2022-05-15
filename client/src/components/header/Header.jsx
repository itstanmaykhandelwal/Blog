import React from 'react';
import './header.css'

const Header = () => {
  return (
      <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>SRK PG COLLEGE</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src="https://images.pexels.com/photos/6469/red-hands-woman-creative.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      </div>
  );
};

export default Header;
