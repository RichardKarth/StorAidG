import React from 'react'
import AboutViewHeader from '../components/AboutViewHeader'
import AboutUs from '../components/AboutUs'
import Logos from '../components/Logos'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <AboutViewHeader />
      <AboutUs />
      <Logos />
      <Testimonials />
      <WhyChooseUs />
      <NewsLetter />
    </div>
  )
}

export default About