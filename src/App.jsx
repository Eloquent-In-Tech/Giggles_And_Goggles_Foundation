import { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sustainability from './pages/Sustainability';
import SafeGuarding from './pages/SafeGuarding';
import HurlinghamFoundation from './pages/Support';
import Weddings from './pages/Weddings';
import Foundation from './pages/Fpoundation';
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
import Career from './pages/Career';
import TermsOfUse from './pages/Partners';
import SustainAtHurlingham from './pages/SustainAtHurlingham';
import EnvironmentalHurlingham from './pages/EnvironmentalHurlingham';
import RegisterInterest from './pages/RegisterInterest';
import VisionsAndVaues from './pages/VisionsAndVaues';
import PrivacyNotice from './pages/PrivacyNotice';
import SupportCard from './components/support_research/SupportCard';
import Support from './pages/Support';

function App() {
  return (
    <>
      <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/training" element={<Sustainability/>} />
      <Route path="/advocacy" element={<SafeGuarding/>} />
      <Route path="/support" element={<Support/>} />
      <Route path="/weddings" element={<Weddings/>} />
      <Route path="/foundation" element={<Foundation/>} />
      <Route path="/christmas" element={<Christmas/>} />
      <Route path="/summer" element={<Summer/>} />
      <Route path="/frequently-asked-questions" element={<Faq/>} />
      <Route path="/rooms" element={<Rooms/>} />
      <Route path="/private-events-form" element={<PrivateEventsForm/>} />
      <Route path="/stay-in-touch" element={<StayInTouch/>} />
      <Route path="/hurlingham-maps-and-directions" element={<MapsAndDirection/>} />
      <Route path="/donate" element={<CleanAirProgramme/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/news" element={<Events/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/career" element={<Career/>} />
      <Route path="/partners" element={<TermsOfUse/>} />
      <Route path="/sustainability-at-hurlingham" element={<SustainAtHurlingham/>} />
      <Route path="/environmental-hurlingham" element={<EnvironmentalHurlingham/>} />
      <Route path="/register-interest" element={<RegisterInterest/>} />
      <Route path="/visions-and-values" element={<VisionsAndVaues/>} />
      <Route path="/privacy-notice" element={<PrivacyNotice/>} />
    </Routes>
  </Router>
    </>
  )
}

export default App
