import React from 'react'

const GetInTouchForm = () => {
  return (
    <div>
        <form id='regForm' className='reg-form'>
            <div className='input-group'>
                <label htmlFor="fullName" className='form-label'>Your Name</label>
                <input type="text" id='fullName' className='form-input' placeholder='Your name' />
            </div>
                <div className='email-telephone-div'>
                    <div className='input-group'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" id='email' className='form-input ' placeholder='Email' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="telephone-nr" className='form-label'>Telephone</label>
                        <input type="text" id='telephone-nr' className='form-input ' placeholder='Telephone' />
                    </div>
                </div>
            <div className='input-group'>
                <label htmlFor="subject" className='form-label'>Subject</label>
                <input type="text" id='subject' className='form-input' placeholder='How can we help you?' />
            </div>
            <div className='input-group textarea-input'>
                <label htmlFor="comments" className='form-label'>Comments / Questions</label>
                <textarea name="comments" id="comments" placeholder='Comments'></textarea>
            </div>
            <div className='input-group submit-btn-form'>
                <button type='submit' className='discover-more-btn btn'>Submit</button>
            </div>

        </form>
    </div>
  )
}

export default GetInTouchForm