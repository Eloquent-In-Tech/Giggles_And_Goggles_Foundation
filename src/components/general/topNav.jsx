import React, { useState } from 'react'
import logo from '../../assets/Hurlingham_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function TopNav() {
  const [menuStates, setMenuStates] = useState({
    about: false,
    events: false,
    contact: false,
  });

  const handleMouseEnter = (menu) => {
    setMenuStates((prevStates) => ({
      ...prevStates,
      [menu]: true,
    }));
  };

  const handleMouseLeave = (menu) => {
    setMenuStates((prevStates) => ({
      ...prevStates,
      [menu]: false,
    }));
  };
  return (
    <div className="flex items-center justify-between  py-2 px-6">
    <img src={logo} alt="logo" className="h-24 w-24 font-semibold" />
    <div className="flex items-center space-x-[200px] ml-[50px]">
      <MenuItem 
        label="ABOUT"
        subMenuLinks={[
          { label: 'SUSTAINABILITY', url: '/sustainability' },
          { label: 'SAFEGUARDING HURLINGHAM', url: '/safeguarding-hurlingham' },
          { label: 'THE HURLINGHAM FOUNDATION', url: '/the-hurlingham-foundation' },
        ]}
        menuState={menuStates.about}
        onMouseEnter={() => handleMouseEnter('about')}
        onMouseLeave={() => handleMouseLeave('about')}
      />
      <MenuItem
        label="EVENTS"
        subMenuLinks={[
          { label: 'WEDDINGS', url: '/weddings' },
          { label: 'CORPORATE, CHARITY & AWARDS', url: '/corporate-charity-&-awards' },
          { label: 'CHRISTMAS', url: '/christmas' },
          { label: 'SUMMER', url: '/summer' },
          { label: 'PRIVATE EVENTS FORM', url: '/private-events-form' },
          { label: 'FREQUENTLY ASKED QUESTION', url: '/frequently-asked-questions' },
          { label: 'ROOMS', url: '/rooms' },
          { label: 'STAY IN TOUCH', url: '/stay-in-touch' },
        ]}
        menuState={menuStates.events}
        onMouseEnter={() => handleMouseEnter('events')}
        onMouseLeave={() => handleMouseLeave('events')}
      />
      <MenuItem className=""
        label="CONTACT US"
        subMenuLinks={[
          { label: 'HURLINGHAM MAP & DIRECTIONS', url: '/hurlingham-maps-and-directions' },
          { label: 'CLEAN AIR NEIGHBOURHOOD PROGRAMME', url: '/clean-air-neighbourhood-programme' },
        ]}
         menuState={menuStates.contact}
        onMouseEnter={() => handleMouseEnter('contact')}
        onMouseLeave={() => handleMouseLeave('contact')}
      />
    </div>
    <div className="flex flex-col items-center ml-[100px]">
      <span className="bg-blue-600 py-2 px-12 text-white mb-2 ml-[215px] hover:bg-blue-400 hover:cursor-pointer">
        Login
      </span>
      <input
        type="text"
        placeholder="Search"
        className="bg-slate-300 py-2 px-[100px] ml-[50px] text-black font-medium placeholder-black pl-[20px]"
      />
      <FontAwesomeIcon icon={faSearch} className="absolute right-10 top-[73px] h-[17px] text-gray-400" />
    </div>
  </div>
);
}

function MenuItem({ label, subMenuLinks, menuState, onMouseEnter, onMouseLeave }) {
return (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <h3 className="text-lg mt-2 font-semibold ">
      <span className=" hover:text-slate-500 hover:underline hover:cursor-pointer ">
        {label}
      </span>
      {menuState && (
        <div className="flex flex-col absolute bg-slate-200 text-base font-medium p-4">
          {subMenuLinks.map((link) => (
            <a key={link.label} href={link.url} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </h3>
  </div>
);
}


export default TopNav