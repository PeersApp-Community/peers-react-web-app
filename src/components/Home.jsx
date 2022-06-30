import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import About from './About'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Download from './Download'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
       <Navbar />
       <Hero />
       <About />
       <Testimonials />
       <FAQ />
       <Download />
       <Footer />
    </div>
  )
}

export default Home