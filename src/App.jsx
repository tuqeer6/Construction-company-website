
import AboutUs from './components/AboutUs'
import CEOMessage from './components/CEOMessage'
import ContactUS from './components/ContactUS'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='min-h-screen bg-emerald-900 text-white overflow-hidden'>
      <Header/>
      <Hero/>
      <Projects/>
      <AboutUs/>
      <CEOMessage/>
      <Testimonials/>
      <ContactUS/>
      <Footer/>
    </div>
  )
}

export default App