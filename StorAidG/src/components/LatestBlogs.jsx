import React, { useEffect } from 'react'
import { useState } from 'react';

const LatestBlogs = () => {

  const [blogPost, setBlogPost] = useState([])
  const [expandedBlog, setExpandedBlog] = useState(null);

  const getData = async () => {
    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
    const data = await res.json();
    setBlogPost(data);
  }

  useEffect( () => {
    getData()
  }, []);

 const readMoreText = (id) => {
  setExpandedBlog(expandedBlog === id ? null : id);

 }


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

        {blogPost.map((item) => {
          return(
            
            <div className='blog-card' key={item.id}>
              <div>
                <img src={item.imageUrl} alt="" />
              </div>
              <div className='blog-created'>
                <img src="../src/assets/Calendar-icon.svg" alt="" />
                <p>{item.created}</p>
              </div>

              <div className='blog-title'>
                <h6>{item.title}</h6>
              </div>

              <div className={`blog-description ${expandedBlog === item.id ? 'expanded' : ''}`}>
                <p>{item.description}</p>
              </div>

              <div className='read-more'>
                <button onClick={() => readMoreText(item.id)}>
                  {expandedBlog === item.id ? 'show less' : 'show more'}
                </button>

              </div>

            </div>
          )
        })
        
        
        }
        
      </div>
    </div>
  )
}

export default LatestBlogs