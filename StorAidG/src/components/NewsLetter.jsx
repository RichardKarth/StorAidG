import React, { useState } from 'react'



const NewsLetter = () => {
  

  const [subscribeEmail, setSubscribeEmail] = useState({email: ''})
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState({message: ""})
  const [errorsText, setErrorsText] = useState (false);


  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    const res = await fetch ('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', {method: 'POST', headers:{'Content-Type': 'application/json'},body: JSON.stringify(subscribeEmail)})
    const data = await res.json();
    
    if(res.ok){
      setSubscribeEmail({email: ''})
      handleSent(data.message)
      setSuccess({message: data.message})
      setErrors({message: ""})
      setErrorsText(false);
      
    }
    else{
      setErrors({message: 'Oops, something went Wrong!'})
      setErrorsText(true);

    }
    
  }
  const handleChange = (e) => {

    const {name, value} = e.target
    setSubscribeEmail({...subscribeEmail, [name]: value })

  }
  const handleSent = (message) => {
    

  }



  return (
    <div className='news-letter-bg'>
      <div className='margin-wrapper'>
        <div className='news-letter-container'>
          <div className='news-letter-left-side'>
            <h3>Subscribe To Our Newsletter</h3>
            <p>Subscribe to our newsletter to receive early discount offers, updates and info</p>
          </div>
          <div className='news-letter-right-side'>

            <form action="" onSubmit={handleSubmit} noValidate>

              <input type="text" name='email' placeholder='Enter your email' value={subscribeEmail.email} onChange={handleChange} required />
              
              <button className='discover-more-btn'>Submit</button>
            </form>
              <span className={`subscribe-message ${errorsText === true ? 'errors-message' : ''}`}>{errors && errors.message || success && success.message}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter