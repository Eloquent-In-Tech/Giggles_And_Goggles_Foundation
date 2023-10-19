import React from 'react'
import AboutHero from '../components/about/AboutHero'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import AboutCard from '../components/about/aboutCard'

function About() {
  return (
    <div>
        <TopNav/>
        <AboutHero/>
        <AboutCard/>
        <Footer/>
        
    </div>
  )
}

export default About