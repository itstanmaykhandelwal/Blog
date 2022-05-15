import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import Logo from '../../assests/av.png'
import './topbar.css'

const TopBar = () => {
  const {user, dispatch} = useContext(Context)
  // const PF = "http://localhost:5000/images/"

  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className='top'>
      <div className='topLeft'>
        <i class="topIcon fab fa-facebook"></i>
        <i class="topIcon fab fa-instagram"></i>
        <i class="topIcon fab fa-twitter"></i>
        <i class="topIcon fab fa-linkedin"></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to="/">HOME</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/about">ABOUT</Link> 
          </li>
          <li className='topListItem'>
            <Link className='link' to="/contact">CONTACT</Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to="/write">WRITE</Link>
          </li>
          <li className='topListItem' onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <Link to="/settings">
            <img 
              className='topImg' 
              // src={PF+user.profilePic} 
              src={Logo}
              alt="User Img" 
            />
          </Link>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to="/login">
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )
        }
        <i class="searchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;