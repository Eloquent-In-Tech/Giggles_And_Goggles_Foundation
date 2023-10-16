import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import ChristmasHero from '../components/christmas/christmasHero'
import WeddingCard from '../components/weddings/WeddingCard'
import ChristmasPhotoPanel from '../components/christmas/ChristmasPhotoPanel'

function Christmas() {
  return (
    <div>
        <TopNav/>
        <ChristmasHero/>
        <WeddingCard/>
        <ChristmasPhotoPanel/>
        <Footer/>

    </div>
  )
}

export default Christmas