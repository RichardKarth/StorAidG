import React from 'react'

const WelcomePage = () => {
  return (
    <div className='hero-container'>
      <div className='hero-box'>
          <div className='hero-text'>
            <h4>Welcome to StorAid</h4>
            <h1>Space Simplified, Storage Perfected</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</p>
            <button className='discover-more-btn'>Discover More</button>
          </div>

          <div className='hero-image'>
            <img src="../src/assets/Hero-image.svg" alt="" />
          </div>
      </div>
    </div>
  )
}

export default WelcomePage