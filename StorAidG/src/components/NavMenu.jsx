import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavMenu = () => {
  return (
    <div className='nav-menu'>
      <div>
        <img src="../src/assets/Logo-icon.svg" alt="" />
      </div>

      <div className='nav-menu-options'>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/about-us">About us</NavLink>
          <NavLink className="nav-link" to="/services">Services</NavLink>
          <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
      </div>

      <div>
        <button className='book-now-btn'>Book Now</button>
      </div>
    </div>
  )
}

export default NavMenu