import React from 'react'
import ServicesViewHeader from '../components/ServicesViewHeader'
import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import BookNow from '../components/BookNow'
import NewsLetter from '../components/NewsLetter'
import FAQ from '../components/FAQ'

const Services = () => {
  return (
    <div>
        <ServicesViewHeader/>
        <OurServices/>
        <Testimonials/>
        <FAQ/>
        <BookNow/>
        <NewsLetter/>
    </div>
  )
}

export default Services