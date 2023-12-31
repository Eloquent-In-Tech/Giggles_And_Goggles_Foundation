import React from 'react'
import TopNav from '../components/general/topNav'
import HomeHero from '../components/home/Hero'
import Footer from '../components/general/Footer'
import HomeCard from '../components/home/HomeCard'


function Home() {
  return (
    <div>
        <TopNav/>
        <HomeHero/>
        <HomeCard/>
        <Footer/>
    </div>
  )
}

export default Home