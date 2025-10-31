import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import AboutUs from './components/AboutUs'
import AllRightsReserved from './components/AllRightsReserved'
import BookNow from './components/BookNow'
import LatestBlogs from './components/LatestBlogs'
import Logos from './components/Logos'
import NavMenu from './components/NavMenu'
import NewsLetter from './components/NewsLetter'
import OurServices from './components/OurServices'
import PricingPlan from './components/PricingPlan'
import Testimonials from './components/Testimonials'
import WelcomePage from './components/WelcomePage'
import WhyChooseUs from './components/WhyChooseUs'


function App() {
  

  return (
    <div className='container'>

      <header>
        <TopBar />
        <NavMenu />
      </header>
      
      <main>
        <section className='hero'>
          <WelcomePage></WelcomePage>
        </section>

        <section className='about-us'>
        <AboutUs />
        </section>

        <section className='logos'>
        <Logos />
        </section>

        <section className='our-services'>
        <OurServices />
        </section>
        
        <section className='testimonials'>
        <Testimonials />
        </section>

        <section className='why-choose-us'>
        <WhyChooseUs />
        </section>

        <section className='pricing-plan'>
        <PricingPlan />
        </section>

        <section className='book-now'>
        <BookNow />
        </section>

        <section className='latest-blogs'>
        <LatestBlogs />
        </section>

        <section className='newsletter'>
        <NewsLetter />
        </section>

      </main>

      <footer className='rights-reserved'>
        <AllRightsReserved />
      </footer>
      
    </div>
  )
}

export default App
