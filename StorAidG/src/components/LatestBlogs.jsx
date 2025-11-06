import React from 'react'

const LatestBlogs = () => {
  return (
    <div className='margin-wrapper'>
      <div className='blog-section-upper'>
        <div className='blog-section-upper-left'>
          <h4>Latest Blog and News</h4>
          <h3>Check Out Our Latest Blog and News Update</h3>
        </div>
        <div className='blog-section-upper-right'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
        </div>
      </div>


      <div className='blog-section-lower'>

        <div className='blog-section-cards'>
          <div className='blog-square'></div>
          <div className='blog-square-texts'>
              <div className='blog-dates'>
                <img src="../src/assets/Calendar-icon.svg" alt="" />
                <p>August 17, 2025</p>
              </div>
            <h6>Safe and Secure: The Importance of Choosing the Right Storage</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
            <div className='a-tagg-style'>
                <a href="#">Read More</a>
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </div>
          </div>
        </div>

        <div className='blog-section-cards'>
          <div className='blog-square'></div>
            <div className='blog-square-texts'>
              <div className='blog-dates'>
                <img src="../src/assets/Calendar-icon.svg" alt="" />
                <p>August 17, 2025</p>
              </div>
            <h6>Safe and Secure: The Importance of Choosing the Right Storage</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
            <div className='a-tagg-style'>
                <a href="#">Read More</a>
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </div>
          </div>
        </div>

        <div className='blog-section-cards'>
          <div className='blog-square'></div>
            <div className='blog-square-texts'>
              <div className='blog-dates'>
                <img src="../src/assets/Calendar-icon.svg" alt="" />
                <p>August 17, 2025</p>
              </div>
            <h6>Safe and Secure: The Importance of Choosing the Right Storage</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
              <div className='a-tagg-style'>
                <a href="#">Read More</a>
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LatestBlogs