import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import SustainabilityHero from '../components/education/Hero'
import CardEducation from '../components/education/EducateCard'

function Sustainability() {
  return (
    <div>
        <TopNav/>
        <SustainabilityHero/>
        <CardEducation/>
        <Footer/>
    </div>
  )
}

export default Sustainability