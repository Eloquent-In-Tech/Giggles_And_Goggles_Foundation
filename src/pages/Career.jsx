import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import CareerHero from '../components/careers/CareerHero'
import CareerVideo from '../components/careers/CareerVideo'
import CareerCard from '../components/careers/CareerCard'

function Career() {
  return (
    <div>
        <TopNav/>
        <CareerHero/>
        <CareerVideo/>
        <CareerCard/>
        <Footer/>
    </div>
  )
}

export default Career