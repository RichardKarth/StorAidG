import React from 'react'

const Testimonials = () => {
  return (
    <div className='testimonials-section'>
      <div className='margin-wrapper'>
          <div className='testimonials-wrapper'>
            <div className='testimonials-upper-box'>
              <h4>Testimonials</h4>
              <h3>See What Our Client Have to Say</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>

            </div>


            <div className='testimonials-lower-box'>
              {/* mapa ut strukturen för korten */}

              <div className='testimonials-lower-box-1'>
                  <div className='testimonials-card-1 square testimonials-wrapper'>
                      <div className='testimonials-grade'>
                        
                        <h2>****</h2>

                      </div>
                      <div className='testimonial-comments'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.</p>
                      </div>
                      <div className='customer-info'>
                        <div className='avatar-and-name'>
                          <div className='customer-avatar'></div>

                          <div className='customer-name'>
                            <h6>Aiden Harvey</h6>
                            <p>Customer</p>
                          </div>
                        </div>

                        <div><img src="../src/assets/Quotation-marks.svg" alt="" /></div>

                      </div>
                  </div>
              </div>
              <div className='testimonials-lower-box-2'>
                  <div className='testimonials-card-2 square testimonials-wrapper'>
                      <div className='testimonials-grade'>
                        <h2>*****</h2>
                      </div>
                      <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.</p></div>
                      <div className='customer-info'>
                        <div className='avatar-and-name'>
                          <div className='customer-avatar'></div>

                          <div className='customer-name'>
                            <h6>Aiden Harvey</h6>
                            <p>Customer</p>
                          </div>
                        </div>

                        <div><img src="../src/assets/Quotation-marks.svg" alt="" /></div>

                      </div>
                  </div>
              </div>
              <div className='testimonials-lower-box-3'>
                  <div className='testimonials-card-3 square testimonials-wrapper'>
                      <div className='testimonials-grade'>
                        <h2>*****</h2>
                      </div>
                      <div className=''>
                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.</p>
                      </div>

                      <div className='customer-info'>
                        <div className='avatar-and-name'>
                          <div className='customer-avatar'></div>

                          <div className='customer-name'>
                            <h6>Aiden Harvey</h6>
                            <p>Customer</p>
                          </div>
                        </div>

                        <div><img src="../src/assets/Quotation-marks.svg" alt="" /></div>

                      </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Testimonials