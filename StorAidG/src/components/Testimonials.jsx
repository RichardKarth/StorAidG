import React, { useEffect, useState } from 'react'



const Testimonials = () => {
  
  
  const [serviceItems, setServiceItems] = useState([])
  
  const fetchData = async () =>{
    const res = await fetch ('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json();
    setServiceItems(data);
  }
  useEffect(() => {
    fetchData()
  }, [])
  
  console.log(serviceItems)


  /* Fick hjälp av AI att mapa ut antalet stjärnor i functionen nedan. Längden på arrayen motsavarar det i item.rating och spannet "..." gör så att map kan räkna igenom tomma listan med undefined*/
  
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
              {serviceItems.map((item) => {
                return(
                  <div key={item.id} className='testimonials-card'>

                    <div className='testimonials-rating'>
                      <p>
                        {[...Array(item.rating)].map((_,i) => (
                          <span key={i} className="material-symbols-outlined">star</span>
                        ))}
                      </p>
                    </div>

                    <div className='testimonials-comment'>
                      <p>{item.comment}</p>
                    </div>


                    <div className='name-and-picture'>
                      <div className='testimonials-avatar-url'>
                        <img src={item.avatarUrl} alt={item.name} />
                      </div>

                        <div className='name-and-companyName'>
                          <div className='testimonials-name'>
                            <h6>{item.name}</h6>
                          </div>

                          <div className='testimonials-company-name'>
                            <p>{item.companyName}</p>
                          </div>
                        </div>

                      <div><img src="../src/assets/Quotation-marks.svg" alt="" /></div>
                    </div>
                  </div>


                )

              })}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Testimonials