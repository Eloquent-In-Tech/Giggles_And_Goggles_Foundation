import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import HeroWedding from '../components/weddings/HeroWedding'
import WeddingCard from '../components/weddings/WeddingCard'
import PhotoPanel from '../components/weddings/PhotoPanel'

function Weddings() {
  return (
    <div>
        <TopNav/>
        <HeroWedding/>
        <WeddingCard/>
        <PhotoPanel/>
        <Footer/>
    </div>
  )
}

export default Weddings