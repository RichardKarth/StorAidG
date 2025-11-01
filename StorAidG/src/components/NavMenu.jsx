import React from 'react'

const NavMenu = () => {
  return (
    <div className='nav-menu'>
      <div>
        <img src="../src/assets/Logo-icon.svg" alt="" />
      </div>

      <div className='nav-menu-options'>
          <p>Home</p>
          <p>About us</p>
          <p>Services</p>
          <p>Contact Us</p>
      </div>

      <div>
        <button className='book-now-btn'>Book Now</button>
      </div>
    </div>
  )
}

export default NavMenu