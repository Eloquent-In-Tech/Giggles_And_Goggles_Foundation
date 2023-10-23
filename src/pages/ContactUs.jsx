import React from 'react'
import TopNav from '../components/general/topNav'
import ContactHero from '../components/contactUs/ContactHero'
import Footer from '../components/general/Footer'
import ContactCard from '../components/contactUs/ContactCard'

function ContactUs() {
  return (
    <div>
        <TopNav/>
        <ContactHero/>
        <ContactCard/>
        <Footer/>
    </div>
  )
}

export default ContactUs