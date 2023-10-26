import React from 'react'
import hero from "../../assets/foundation/HurlingFoundation.png"
import FoundationNavBar from './FoundationNavBar'

function HeroFoundation() {
  return (
    <div>
      <FoundationNavBar/>
        <div>
            <img src={hero} alt="..." className='h-[300px] ml-[530px] mt-[100px] mb-[40px]'/>
        </div>
        <div>
            <h3 className=' text-4xl text-gray-600 mb-[10px]'>THE HURLINGHAM CLUB FOUNDATION</h3>
            <h4 className='text-gray-600 mb-[50px]'> 
            In 2021The Hurlingham Club Foundation was established with support from staff, 
            members and the local community. <br /> <br />
            We have already set up meaningful partnerships with local schools and charities in order to 
            bring about positive change and help <br />many families, children and elderly neighbours to thrive. <br /> 
            In order to continue this fantastic work, we have established a donation page to allow those who 
            are interested in our work to support the cause. <br />Whether small or large, any donation would 
            be most appreciated. 
            </h4>
        </div>
    </div>
  )
}

export default HeroFoundation