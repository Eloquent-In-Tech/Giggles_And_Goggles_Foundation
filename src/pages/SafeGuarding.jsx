import React from 'react'
import TopNav from '../components/general/topNav'
import Footer from '../components/general/Footer'
import HeroSafeGuard from '../components/safeguard/HeroSafeGuard'

function SafeGuarding() {
  return (
    <div>
        <TopNav/>
        <HeroSafeGuard/>
        <Footer/>
    </div>
      )
}

export default SafeGuarding