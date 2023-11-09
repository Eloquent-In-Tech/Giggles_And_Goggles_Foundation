import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import EventsCard from '../components/news/NewsCard'
import EventsHero from '../components/news/NewsHero'

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