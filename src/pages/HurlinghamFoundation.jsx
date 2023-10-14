import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import HeroFoundation from '../components/hurlingham_foundation/HeroFoundation'
import FoundationCard from '../components/hurlingham_foundation/FoundationCard'

function HurlinghamFoundation() {
  return (
    <div>
       <TopNav/>
       <HeroFoundation/>
       <FoundationCard/>
       <Footer/> 
    </div>
  )
}

export default HurlinghamFoundation