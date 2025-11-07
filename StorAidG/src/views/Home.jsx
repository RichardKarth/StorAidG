
import WelcomePage from '../components/WelcomePage'
import AboutUs from '../components/AboutUs'
import Logos from '../components/Logos'
import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import PricingPlan from '../components/PricingPlan'
import BookNow from '../components/BookNow'
import LatestBlogs from '../components/LatestBlogs'
import NewsLetter from '../components/NewsLetter'




const Home = () => {
  return (
    <div>
        <WelcomePage />
        <AboutUs />
        <Logos />
        <OurServices />
        <Testimonials />
        <WhyChooseUs />
        <PricingPlan />
        <BookNow />
        <LatestBlogs />
        <NewsLetter />
    </div>
  )
}

export default Home