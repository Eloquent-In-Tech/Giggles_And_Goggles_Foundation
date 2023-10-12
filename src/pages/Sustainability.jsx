import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import SustainabilityHero from '../components/sustainability/Hero'
import CardSustainability from '../components/sustainability/SustainCard'

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