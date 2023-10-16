import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import HeroWedding from '../components/weddings/HeroWedding'
import WeddingCard from '../components/weddings/WeddingCard'

function Weddings() {
  return (
    <div>
        <TopNav/>
        <HeroWedding/>
        <WeddingCard/>
        <Footer/>
    </div>
  )
}

export default Weddings