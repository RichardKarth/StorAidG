import React from 'react'
import FaqAccordion from './FaqAccordion'

const FAQ = () => {
  return (
    <div className='margin-wrapper'>
        <div className='faq-container'>
            <div className='faq-left-side'>
                <h4>FAQs</h4>
                <h3>Frequently Ask Questions</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className='faq-right-side'>
                <FaqAccordion/>
            </div>
        </div>
    </div>
  )
}

export default FAQ