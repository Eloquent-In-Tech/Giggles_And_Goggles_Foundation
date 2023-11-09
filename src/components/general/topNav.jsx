import React, { useState } from 'react'
import logo from '../../assets/giggles_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 


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
    <div className="flex items-center justify-between  py-2">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="h-28 w-[200px] font-semibold" />
      </Link>
    <div className="flex items-center space-x-[200px] ml-[50px]">
      <MenuItem 
        label="ABOUT"
        mainMenuLink="/about"
        subMenuLinks={[
          { label: 'EDUCATION', url: '/education' },
          { label: 'ADVOCACY', url: '/advocacy' },
          { label: 'SUPPORT & RESEARCH', url: '/support' },
        ]}
        menuState={menuStates.about}
        onMouseEnter={() => handleMouseEnter('about')}
        onMouseLeave={() => handleMouseLeave('about')}
      />
      <MenuItem
        label="NEWS"
        mainMenuLink="/events"
        subMenuLinks={[
          { label: 'WEDDINGS', url: '/weddings' },
          { label: 'CORPORATE, CHARITY & AWARDS', url: '/corporate-charity-and-awards' },
          { label: 'CHRISTMAS', url: '/christmas' },
          { label: 'SUMMER', url: '/summer' },
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
        mainMenuLink="/contact-us"
        subMenuLinks={[
          { label: 'SHARE YOUR THOUGHTS', url: '/private-events-form' },
          { label: 'CLEAN AIR NEIGHBOURHOOD PROGRAMME', url: '/clean-air-neighbourhood-programme' },
        ]}
         menuState={menuStates.contact}
        onMouseEnter={() => handleMouseEnter('contact')}
        onMouseLeave={() => handleMouseLeave('contact')}
      />
    </div>
    <div className="flex flex-col items-center ml-[30px]">
      <span className="bg-blue-600 py-2 px-8 text-white mb-2 ml-[150px] hover:bg-blue-400 hover:cursor-pointer">
        Login
      </span>
      <input
        type="text"
        placeholder="Search"
        className="bg-slate-300 py-2 px-[70px] ml-[10px] text-black font-medium placeholder-black pl-[5px]"
      />
      <FontAwesomeIcon icon={faSearch} className="absolute right-[20px] top-[79px] h-[17px] text-gray-400" />
    </div>
  </div>
);
}

function MenuItem({ label, subMenuLinks, mainMenuLink, menuState, onMouseEnter, onMouseLeave }) {
return (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <h3 className="text-lg mt-2 font-semibold ">
      <Link to={mainMenuLink} className=" hover:text-slate-500 hover:underline hover:cursor-pointer ">
        {label}
      </Link>
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