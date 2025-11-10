import React from 'react'

const GetInTouchForm = () => {
  return (
    <div>
        <form id='regForm' className='reg-form'>
            <div className='input-group'>
                <label htmlFor="fullName" className='form-label'></label>
                <input type="text" id='fullName' className='form-input' placeholder='' />
            </div>
            <div className='input-group'>
                <label htmlFor="email" className='form-label'></label>
                <input type="text" id='email' className='form-input' placeholder='' />
            </div>
            <div className='input-group'>
                <label htmlFor="telephone-nr" className='form-label'></label>
                <input type="text" id='telephone-nr' className='form-input' placeholder='' />
            </div>
            <div className='input-group'>
                <label htmlFor="subject" className='form-label'></label>
                <input type="text" id='subject' className='form-input' placeholder='' />
            </div>
            <div className='input-group'>
                <label htmlFor="comments" className='form-label'></label>
                <textarea name="comments" id="comments" placeholder=''></textarea>
            </div>

        </form>
    </div>
  )
}

export default GetInTouchForm