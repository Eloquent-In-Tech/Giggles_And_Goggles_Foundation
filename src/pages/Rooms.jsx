import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import RoomsHero from '../components/rooms/RoomsHero'
import RoomsPhotoPanel from '../components/rooms/RoomsPhotoPanel'
import RoomsCard from '../components/rooms/RoomsCard'

function Rooms() {
  return (
    <div>
        <TopNav/>
        <RoomsHero/>
        <RoomsCard/>
        <RoomsPhotoPanel/>
        <Footer/>
    </div>
  )
}

export default Rooms