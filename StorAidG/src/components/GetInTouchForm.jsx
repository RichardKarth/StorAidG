import React, { useState } from 'react'

const GetInTouchForm = () => {

    const [formData, setFormData] = useState({name:"", email:"",telephone:"", subject:"",comment:""});
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitted, setsubmitted] = useState(false)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})

        if(value.trim() === ''){
            setErrors(prevErrors => ({...prevErrors, [name]: `Please fill out the ${name} field`}))
        }
        else{
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch ('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

        })
        if (res.ok){
            const data = await res.json()
            setsubmitted(true)
            console.log(data)
            setFormData({name:'', email:'', telephone:'', subject:'', comments:''})
            
            setSubmitMessage(data.message)
            
        }
        else{
            const data = await res.json()
            console.log(data)
            setSubmitMessage('Oops, something went wrong!')
        }
    }
    const handleOk = () => {
        setsubmitted(false)
        setSubmitMessage('');
    }


    if (submitted){
        return (
            <div className='message-popup'>
                <p>{submitMessage}</p>
                <button className='discover-more-btn' onClick={handleOk}>OK</button>
            </div>
        )
    }





    return (
        <div>
            <form id='regForm' className='reg-form' onSubmit={handleSubmit} noValidate>
                <div className='input-group'>
                    <label htmlFor="fullName" className='form-label your-name-label'>Your Name</label>
                    <input type="text" id='fullName' className='form-input' name='name' value={formData.name} onChange={handleChange} placeholder='Your name' required />
                    <span className='errors-message'>{errors.name && errors.name}</span>
                </div>
                    <div className='email-telephone-div'>
                        <div className='input-group'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="email" id='email' className='form-input' name='email' value={formData.email} onChange={handleChange} placeholder='Email' required />
                            <span className='errors-message'>{errors.email && errors.email}</span>
                            
                        </div>
                        <div className='input-group'>
                            <label htmlFor="telephone-nr" className='form-label'>Telephone</label>
                            <input type="text" id='telephone-nr' className='form-input' name='telephone' value={formData.telephone} onChange={handleChange} placeholder='Telephone' />
                            <span className='errors-message'></span>
                        </div>
                    </div>
                <div className='input-group'>
                    <label htmlFor="subject" className='form-label'>Subject</label>
                    <input type="text" id='subject' className='form-input' name='subject' value={formData.subject} onChange={handleChange} placeholder='How can we help you?' required />
                    <span className='errors-message'>{errors.subject && errors.subject}</span>
                </div>
                <div className='input-group textarea-input'>
                    <label htmlFor="comments" className='form-label'>Comments / Questions</label>
                    <textarea name="comment" id="comments" value={formData.comment} onChange={handleChange} placeholder='Comments' required></textarea>
                    <span className='errors-message'>{errors.comment && errors.comment}</span>
                </div>
                <div className='input-group submit-btn-form'>
                    <button type='submit' className='discover-more-btn btn'>Submit</button>
                </div>
                <div className='input-group'>
                    <p className='errors-message'>{submitMessage}</p>
                </div>

            </form>
        </div>
    )
}

export default GetInTouchForm