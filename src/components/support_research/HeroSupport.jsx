import React from 'react'
import hero from "../../assets/Swim/support.jpg"
import FoundationNavBar from './SupportNavBar'

function HeroFoundation() {
  return (
    <div>
      <FoundationNavBar/>
        <div>
            <img src={hero} alt="..." className='h-[500px] w-full ml-[0px] mb-[40px]'/>
        </div>
        <div>
            <h3 className=' text-4xl text-gray-600 mb-[10px]'>IT’S TIME FOR ACTION</h3>
            <h4 className='text-gray-600 mb-[10px] ml-[300px] mr-[300px]'> 01. <br />
                ENSURE PEOPLE OF AFRICAN, CARIBBEAN, AND ASIAN HERITAGE HAVE EQUAL AND EQUITABLE ACCESS TO 
                AQUATICS AND A SAFE EXPERIENCE IN AND AROUND THE WATER.
            </h4>
            <h4 className='text-gray-600 mb-[10px] ml-[300px] mr-[300px]'> 02. <br />
              HIGHLIGHT SWIMMING AS AN ESSENTIAL AND INVALUABLE LIFE-SAVING SKILL FOR ALL COMMUNITIES.
            </h4>
            <h4 className='text-gray-600 mb-[10px] ml-[300px] mr-[300px]'> 03. <br />
            PROMOTE WATER SAFETY AND DROWNING PREVENTION EDUCATION AMONGST AFRICAN, CARIBBEAN, AND ASIAN COMMUNITIES.
            </h4>
            <h4 className='text-gray-600 mb-[10px] ml-[300px] mr-[300px]'> 04. <br />
            CHALLENGE THE AQUATIC SECTOR INTO ADDRESSING ITS INHERENT SYSTEMIC AND INSTITUTIONAL INEQUALITIES.
            </h4>
            <h4 className='text-gray-600 mb-[10px] ml-[300px] mr-[300px]'> 05. <br />
            ENSURE THAT THE ISSUES THAT PRECLUDE THESE COMMUNITIES FROM ENGAGING IN AQUATICS ARE 
            RESEARCHED, UNDERSTOOD AND ADEQUATELY ADDRESSED.
            </h4>
            <h4 className='text-gray-600 mb-[10px] ml-[300px] mr-[300px]'> 06. <br />
            COLLABORATE WITH NATIONAL AQUATIC GOVERNING BODIES, BRANDS AND OTHER CHARITIES IN ORDER TO DRIVE PARTICIPATION, 
            ENGAGEMENT AND INCLUSION FOR AFRICAN, CARIBBEAN, AND ASIAN COMMUNITIES IN AQUATICS.
            </h4>
        </div>
    </div>
  )
}

export default HeroFoundation