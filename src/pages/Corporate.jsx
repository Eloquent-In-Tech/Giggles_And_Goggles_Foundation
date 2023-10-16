import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import CorporateHero from '../components/corporate/CorporateHero'
import WeddingCard from '../components/weddings/WeddingCard'
import PhotoPanel from '../components/corporate/PhotoPanel'

function Corporate() {
  return (
    <div>
        <TopNav/>
        <CorporateHero/>
        <WeddingCard/>
        <PhotoPanel/>
        <Footer/>
        
    </div>
  )
}

export default Corporate