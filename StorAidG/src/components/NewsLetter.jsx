import React from 'react'

const NewsLetter = () => {
  return (
    <div className='news-letter-bg'>
      <div className='margin-wrapper'>
        <div className='news-letter-container'>
          <div className='news-letter-left-side'>
            <h3>Subscribe Our Newsletter</h3>
            <p>Subscribe to our newsletter to receive early discount offers, updates and info</p>
          </div>
          <div className='news-letter-right-side'>
            <form action="">
              <input type="text" placeholder='Enter your email' required />
              <button className='discover-more-btn'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter