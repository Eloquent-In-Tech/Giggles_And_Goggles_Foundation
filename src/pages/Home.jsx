import React from 'react'
import TopNav from '../components/general/topNav'
import HomeHero from '../components/home/Hero'
import Footer from '../components/general/Footer'
import Card from '../components/home/card'


function Home() {
  return (
    <div>
        <TopNav/>
        <HomeHero/>
        <Card/>
        <Footer/>
    </div>
  )
}

export default Home