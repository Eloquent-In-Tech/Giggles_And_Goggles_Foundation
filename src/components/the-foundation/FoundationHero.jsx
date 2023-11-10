import React from 'react'
import hero from "../../assets/Swim/foundation.jpg"
import FoundationNavBar from './FoundationNavBar'

function FoundationHero() {
  return (
    <div>
      <FoundationNavBar/>
        <div>
            <img src={hero} alt="..." className='h-[550px] w-full  mb-[40px]'/>
        </div>
        <div>
            <h3 className=' text-4xl text-gray-600 mb-[40px] mt-[70px]'>The Goggle and Giggle Foundation </h3>
            <h4 className='text-gray-600 mb-[50px] ml-[250px] mr-[250px]'> 
            We are a not-for-profit organisation dedicated to diversifying aquatics. Our mission is 
            to ensure that that all communities can benefit from swimming, not only a sport but 
            a lifesaving skill.
            
            <h1 className=' font-bold underline'>Problem</h1>
            WHO research confirms that ethnic communities are at an increased risk of drowning, which is no 
            surprise considering that Black and Asian communities have historically been precluded from swimming. 
            Today, the statistics are startling with 95% of black adults and 80% of black children who do not swim 
            in England.
          <h1 className=' font-bold underline'>Mission</h1>
          We are a not-for-profit organisation dedicated to diversifying aquatics. Our mission is to ensure that 
          that all communities can benefit from swimming, not only a sport but a lifesaving skill.
          We exist to provide a youth-powered solution; going beyond advocating for change, we believe in 
          action through service delivery. We are dedicated to breaking down the barriers to swimming by offering
          targeted swimming lessons to minority youth in London. In 2023, through our flagship programme ‘black 
          kids swim too’ we will deliver and train over 1000 young swimmers.
          <h1 className=' font-bold underline'>How</h1>
          With generation support from our backers, we partner with schools, local businesses and community 
          organisations to be the change we want to see.
          <h1 className=' font-bold underline'>Strategy</h1>
          Several of London’s top private/public schools have extensive swimming facilities 
          (Dulwich college Jags college, Mill Hill etc), swimming pools are also available at top hotels and spas. 
          We will create sustainable and lasting partnerships with these organisations to access heavily subsidised or
          free use of pool space to deliver our lessons.
          <h1 className=' font-bold underline'>Funding</h1>
          Funding from backers will be used to pay for swimming teachers, marketing communications and 
          administrative fees.
          Our funding pipeline will be made up of individual donations, national lottery funding and other 
          community sports grants. We also intend to work with the private sector with a variety of corporate 
          partners to fund our programmes.
          <h1 className=' font-bold underline'>Black kids swim too programme</h1>
          Our inaugural programme <span className='text-blue-500 hover:underline hover:text-blue-400'>‘black kids swim too’ </span>will train over 1000 young black swimmers from near 
          complete beginner to level X stage swimmers, breaking the generational barriers where black children 
          are precluded from aquatics. In addition, amongst 1000 swimmers trained, we will coach
          mentor and fund 20 black children to become fully qualified lifeguards, propelling the community 
          towards inclusion and water safety in order to save lives. 
            <br className='mb-[15px]' />
           </h4>
        </div>
    </div>
  )
}

export default FoundationHero