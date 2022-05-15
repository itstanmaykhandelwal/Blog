import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [cats,setCats] = useState([]);

    useEffect(() => {
        const getCats = async() =>{
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    },[])
    return (
        <div className='sidebar'>
            <div className='sidebarItem' style={{"textAlign":'center'}}>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src="https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <p>This is our blog page hope you like our blog page so keep happy and stay safe</p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle' style={{"textAlign":'center'}}>CATEGORIES</span>
                <ul className='sidebarList'>
                {/* {cats.map((c) => (
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className='sidebarListItem'>{c.name}</li>
                    </Link>
                ))} */}
                <li className='sidebarListItem'>Music</li>
                <li className='sidebarListItem'>Technology</li>
                <li className='sidebarListItem'>Games</li>
                <li className='sidebarListItem'>Metaverse</li>
                <li className='sidebarListItem'>Science</li>
                <li className='sidebarListItem'>Grooming</li>
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle' style={{"textAlign":'center'}}>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i class="sidebarIcon fab fa-facebook"></i>
                    <i class="sidebarIcon fab fa-instagram"></i>
                    <i class="sidebarIcon fab fa-twitter"></i>
                    <i class="sidebarIcon fab fa-linkedin"></i>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
