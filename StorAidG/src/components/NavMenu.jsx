import React from 'react'

const NavMenu = () => {
  return (
    <div className='nav-menu'>
      <div>
        <img src="../src/assets/Logo-icon.svg" alt="" />
      </div>

      <div className='nav-menu-options'>
          <p>HOME</p>
          <p>ABOUT US</p>
          <p>SERVICES</p>
          <p>CONTACT US</p>
      </div>

      <div>
        <button className='nav-menu-button'>BOOK NOW</button>
      </div>
    </div>
  )
}

export default NavMenu