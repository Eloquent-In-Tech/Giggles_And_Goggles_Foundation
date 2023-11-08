import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import SustainabilityHero from '../components/education/Hero'
import CardSustainability from '../components/education/SustainCard'

function Sustainability() {
  return (
    <div>
        <TopNav/>
        <SustainabilityHero/>
        <CardSustainability/>
        <Footer/>
    </div>
  )
}

export default Sustainability