import React from 'react'
import hero from "../../assets/cleanAir/cleanAirHero.jpeg"
import cleanAir from "../../assets/cleanAir/rivertheme1.jpeg"
import clean from "../../assets/cleanAir/rivertheme.jpeg"
import airclean from "../../assets/cleanAir/rivertheme2.jpeg"
import last from "../../assets/cleanAir/rivertheme3.png"
import logo from '../../assets/Hurlingham_logo.png'

function CleanAirHero() {
  return (
      <div className='text-gray-600'>
          <div>
              <img src={hero} alt="..." className='h-[450px] w-full  mb-[40px]'/>
          </div>
        <div>
            <h3 className=' text-4xl text-gray-600 font-bold mb-[20px] mt-[70px] tracking-widest'>CLEAN AIR NEIGHBOURHOODS PROGRAMME</h3>
            <h4 className='text-gray-600 mb-[50px] ml-[250px] mr-[250px] text-justify'> 
            The scheme will be trialled for 6-18 months and will gather data to use as the driver to decide whether cameras are kept 
            or removed from their current locations.
            <br className='mb-[20px]' />
            The programme is not without controversy but is being implemented by
            LBH&F with an aim to improve air quality in the local area. It does not prevent access to any 
            areas in the borough but does make traffic use prescribed (arterial) routes to stop out-of-borough 
            traffic using residential streets as cut-throughs. The programme is being policed by a series of 
            five cameras (marked with a camera icon on the map below) and seven monitoring devices 
            (marked with a white circle) west of Wandsworth Bridge Road. Once the scheme is up and running, 
            vehicles passing through one of the cameras could receive a fine of up to £130.  <br className='mb-[5px]' />
            </h4>

            <div className=' ml-[450px]'>
              <img src={cleanAir} alt="..." />
            </div>
            <div className=' ml-[250px] mr-[250px] mt-10 mb-[50px] text-justify'> 
              <h4>
              Cars registered in the borough can travel freely through cameras without being penalised. 
              You can find out if this is applicable to you by clicking <span className='text-blue-500 hover:underline hover: cursor-pointer'>here </span> 
              and entering your postcode. 
              All out-of-borough traffic to the Club must use the camera-free routes, as shown on the maps 
              and described below, to avoid being fined. With one exception for those travelling across Wandsworth 
              Bridge Road (as described below), there are no routine exemptions for those travelling to and from 
              the Club.
              </h4>
            </div>
            <div>
              <h4 className='text-xl'>Travelling to the Club via Putney Bridge/Fulham Palace Road and New Kings Road</h4>
              <img src={clean} alt="..." className='ml-[450px] mt-[20px] mb-[30px]'/>

              <h4 className='ml-[250px] mr-[250px] mt-10 mb-[50px] text-justify'>
                The map above illustrates with the use of arrows the best roads for you to travel to the Club 
                entering via Main Gate. Anyone exiting Main Gate and needing to travel back via Putney Bridge or 
                Fulham Palace Road is advised to avoid the Hurlingham Road/New Kings Road junction. This will mean 
                you drive through no cameras.
              </h4>
            </div>
            <div>
              <h4 className='text-xl'>Travelling to the Club via Wandsworth Bridge Road</h4>
              <img src={airclean} alt="..." className='ml-[450px] mt-[20px] mb-[30px]' />
              <h4 className='ml-[250px] mr-[250px] mt-10 mb-[50px] text-justify'>
                  Those travelling to the Club via the Wandsworth Bridge Road should enter through the Back Gate. 
                  However, when exiting the Club via Main Gate one will have to use the roads north of Broomhouse 
                  Lane to join New Kings Road.
                </h4>
            </div>
            <div>
              <h3 className='text-xl'>Travelling to the Club from south of the river via Wandsworth Bridge</h3>
              <img src={last} alt="..." className='ml-[450px] mt-[20px] mb-[30px]' />
              <h5 className='ml-[250px] mr-[250px] mt-10 mb-[100px] text-justify'>
                Anyone travelling north over Wandsworth Bridge should turn left onto Carnwarth Road and enter 
                the Club via the Back Gate. If you intend to travel home directly, exit via Main Gate, travel 
                along Hurlingham Road, through the camera on Broomhouse Lane and travel back south over Wandsworth 
                Bridge. As there is no possibility to travel back over the bridge without passing a camera, no 
                fine will be processed for this journey. When the Back Gate is closed, pre-8am and post-8pm, 
                guests can drive through the camera north on Broomhouse Lane and enter the Club via Main Gate 
                without fine. <br className='mb-[20px]'/>
                
                If you travel to the Club via the above route but intend to travel elsewhere after using the Club, 
                you can do so as you please, but be aware not to drive through any of the cameras indicated with a
                camera on the maps above. <br className='mb-[20px]' />
                
                Automatic Number-plate Recognition (ANPR) cameras have been installed outside the Main and Back 
                Gates. These ANPR cameras will allow the Club and LBH&F to work together to monitor the amount of 
                traffic using the Club, and to allow certain mechanisms described above for travel to and from the 
                Club. The data gathered by the cameras will not be retained by LBH&F for any other purpose. The 
                Council’s data privacy policy can be found <span className='text-blue-500 hover:underline hover: cursor-pointer'>here</span>.
                
                Further information on the scheme with frequently asked questions can be found on the LBH&F 
                website <span className='text-blue-500 hover:underline hover: cursor-pointer'>here</span>.</h5>
            </div>
        </div>
        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[3867px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default CleanAirHero