import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import EventsCard from '../components/events/EventsCard'
import EventsHero from '../components/events/EventsHero'

function Events() {
  return (
    <div>
        <TopNav/>
        <EventsHero/>
        <EventsCard/>
        <Footer/>
    </div>
  )
}

export default Events