import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import SummerHero from '../components/summer/SummerHero'
import WeddingCard from '../components/weddings/WeddingCard'
import SummerPhotoPanel from '../components/summer/SummerPhotoPanel'

function Summer() {
  return (
    <div>
        <TopNav/>
        <SummerHero/>
        <WeddingCard/>
        <SummerPhotoPanel/>
        <Footer/>
    </div>
  )
}

export default Summer