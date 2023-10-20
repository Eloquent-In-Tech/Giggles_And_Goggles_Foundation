import { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sustainability from './pages/Sustainability';
import SafeGuarding from './pages/SafeGuarding';
import HurlinghamFoundation from './pages/HurlinghamFoundation';
import Weddings from './pages/Weddings';
import Corporate from './pages/Corporate';
import Christmas from './pages/Christmas';
import Summer from './pages/Summer';
import Faq from './pages/Faq';
import Rooms from './pages/Rooms';
import PrivateEventsForm from './pages/PrivateEventsForm';
import StayInTouch from './pages/StayInTouch';
import MapsAndDirection from './pages/MapsAndDirection';
import CleanAirProgramme from './pages/CleanAirProgramme';
import About from './pages/About';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sustainability" element={<Sustainability/>} />
      <Route path="/safeguarding-hurlingham" element={<SafeGuarding/>} />
      <Route path="/the-hurlingham-foundation" element={<HurlinghamFoundation/>} />
      <Route path="/weddings" element={<Weddings/>} />
      <Route path="/corporate-charity-and-awards" element={<Corporate/>} />
      <Route path="/christmas" element={<Christmas/>} />
      <Route path="/summer" element={<Summer/>} />
      <Route path="/frequently-asked-questions" element={<Faq/>} />
      <Route path="/rooms" element={<Rooms/>} />
      <Route path="/private-events-form" element={<PrivateEventsForm/>} />
      <Route path="/stay-in-touch" element={<StayInTouch/>} />
      <Route path="/hurlingham-maps-and-directions" element={<MapsAndDirection/>} />
      <Route path="/clean-air-neighbourhood-programme" element={<CleanAirProgramme/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
    </Routes>
  </Router>
    </>
  )
}

export default App
