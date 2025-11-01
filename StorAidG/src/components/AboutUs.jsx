import React from 'react'

const AboutUs = () => {
  return (
    <div className='margin-wrapper'>

      <div className='about-us-containers'>

        <div className='about-us-left-container'>
              <div className='grey-square'>
                <div className='green-square'>
                    <div className='greenbox-one'>
                      <h2>12+</h2>
                      <p>Years Of Experience</p>
                    </div>
                    <div className='greenbox-two'>
                      <h2>150K+</h2>
                      <p>Satisfied Clients</p>
                    </div>
                    <div className='greenbox-three'>
                      <h2>35+</h2>
                      <p>Warehouse</p>
                    </div>

                </div>
              </div>
        </div>

        <div className='about-us-right-container'>
            <div className='top-half-container'>
                <h4>About Us</h4>
                <h3>Providing a Safe Space for Your Treasured Items</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>
            </div>

            <div className='mid-container'>
              <div className='vision-box'>
                <h5>Vision</h5>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
              </div>

              <div className='mission-box'>
                <h5>Mission</h5>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
              </div>

            </div>
              <div className='bottom-half-container'>
                <div className='discover-box'>
                  <button className='discover-more-btn'>Discover More</button>
                </div>

                <div className='more-info-box'>
                  <div className='green-circle'>
                    <img src="../src/assets/Yellow-phone-icon.svg" alt="" />
                  </div>

                  <div>
                    <h5>More Information</h5>
                    <h6>+46 8 123 122 44</h6>
                  </div>
                </div>
              </div>
        </div>  
      </div>

    </div>
  )
}

export default AboutUs