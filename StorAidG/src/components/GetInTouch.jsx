import React from 'react'
import GetInTouchForm from './GetInTouchForm'

const GetInTouch = () => {
  return (
    <div className='margin-wrapper'>
        <div className='get-in-touch-container'>
            <div className='get-in-touch-left-side'>
                <h4>Get in Touch</h4>
                <h3>Get Personalized Assistance - Contact Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                <div className='get-in-touch-square'></div>

            </div>

            <div className='get-in-touch-right-side'>
                <GetInTouchForm/>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch