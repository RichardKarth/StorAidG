import React from 'react'
import ServicesViewHeader from '../components/ServicesViewHeader'
import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import BookNow from '../components/BookNow'
import NewsLetter from '../components/NewsLetter'

const Services = () => {
  return (
    <div>
        <ServicesViewHeader/>
        <OurServices/>
        <Testimonials/>

        <BookNow/>
        <NewsLetter/>
    </div>
  )
}

export default Services