import React from 'react'
import '../Style/navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../Images/logo.png'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
            <div className="logo"> <img src={logo} alt='logo' /> </div>
            <div className="links">
                <ul>
                    <li><NavLink to="/adminportal/">HOME</NavLink></li>
                    <li><NavLink to="/adminportal/users">USERS</NavLink></li>
                    <li><NavLink to="/adminportal/about">ABOUT</NavLink></li>
                    <li><NavLink to="/">LOGOUT</NavLink></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar


