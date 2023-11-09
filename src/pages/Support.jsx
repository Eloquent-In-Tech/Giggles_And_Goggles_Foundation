import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import HeroFoundation from '../components/support_research/HeroSupport'
import FoundationCard from '../components/support_research/SupportCard'

function Support() {
  return (
    <div>
       <TopNav/>
       <HeroFoundation/>
       <FoundationCard/>
       <Footer/> 
    </div>
  )
}

export default Support