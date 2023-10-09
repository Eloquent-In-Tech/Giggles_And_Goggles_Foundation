import React from 'react'
import TopNav from '../components/general/topNav'
import HomeHero from '../components/home/Hero'
import { Card } from 'reactstrap'


function Home() {
  return (
    <div>
        <TopNav/>
        <HomeHero/>
        <Card/>
    </div>
  )
}

export default Home