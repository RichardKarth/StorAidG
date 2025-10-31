import React from 'react'

const TopBar = () => {
  return (
    <div className='top-bar'>

      <div className='header-contact-info'>

        <div className='top-bar-phone'>
          <img src="../src/assets/Phone-icon.svg" alt="" />
          <p>+46 8 123 122 44</p>
        </div>
        <div className='top-bar-contact'>
          <img src="../src/assets/Header-mail-icon.svg" alt="" />
          <p>contact@domain.com</p>
        </div>
      </div>

      <div className='header-socials-links'>
          <img src="../src/assets/Facebook.svg" alt="" />
          <img src="../src/assets/Instagram.svg" alt="" />
          <img src="../src/assets/X-icon.svg" alt="" />
          <img src="../src/assets/Youtube.svg" alt="" />
      </div>
    </div>
  )
}

export default TopBar