import { FoundationCardData } from "../../data/FoundationCardData"
import logo from '../../assets/Hurlingham_logo.png'

function FoundationCard() {
  return (
    <div>
        <div className='flex flex-col space-x-[50px] pt-[20px] ml-[570px] mb-[100px]'>
            {FoundationCardData.map((data, index)=>{
                return(
                    <div key={index} className='h-[300px] w-[250px] mt-[20px]'>
                        <a href={data.link}>
                        <img src={data.image} alt="image" className='hover:cursor-pointer'/>
                        <h1 className=' text-gray-600 text-xl pt-[10px]' style={{ pointerEvents: 'none' }}>{data.title}</h1>
                        <p className='mt-[60px] bg-[#84754e] text-xl py-3 hover:bg-[#6C6A40] hover:cursor-pointer'>{data.view}</p>
                        </a>
                    </div>
                )
            })}
            
        </div>
        <div>
            <h1 className="text-3xl text-gray-600 mb-[10px]">HOW WILL THE FOUNDATION MAKE A DIFFERENCE?</h1>
            <h4 className='text-gray-600 mb-[50px] text-left  font-thin ml-[200px]'> 
            <span className="font-bold">Our Vision:</span><br />
            The Hurlingham Club Foundation is an integral part of a thriving and connected community <br /><br />
            <span className="font-bold ">Our Mision:</span><br />
            To enable our community to access opportunities and spaces that improve wellbeing and life chances. <br /> <br />
            <span className="font-bold ">Strategic Objectives: </span><br /> 
            Build a strong Foundation that allows us to better listen to and connect with our community. <br /> <br />
            Increase community support through meaningful volunteering and charitable giving opportunities. <br /> <br />
            Develop sustainable partnerships that are embedded within the community. <br /> <br />
            Deliver activities that support the physical, social and mental well-being of those most in need. <br /><br />
            </h4>

            <h3 className=' text-2xl font-bold text-gray-600 mb-[10px]'>WHO ARE OUR TRUSTEES?</h3>
            <h4 className='text-gray-600 mb-[50px] text-left ml-[200px]'> 
                We expect to appoint two additional trustees soon, but the three initial trustees of the Foundation are; <br /> <br />
                Victoria Hornby – Who has a wealth of experience in working with charities as a dedicated advisor 
                (Bridges Impact Foundation), <br />and is also the current CEO at Mental Health Innovation. <br /><br />
                Jamie Crookenden –  Who has been a driving force behind the Club’s community programme and <br />
                making the inception of The Hurlingham Club Foundation a reality. <br /> <br />
                Piers Wilson – Our CFO, Piers, has been instrumental in working with advisers and the Charities <br /> 
                Commission to set up the Foundation. <br /> <br />
                Paul Denza – Who brings with him decades of experience as a solicitor specialising in trusts, wills, probate and tax. <br /> <br />
                Katia Roele – Who will be the Foundation’s representative on main committee and brings a variety of corporate social responsibility <br />experience. 
            </h4>
            <h3 className=' text-2xl font-bold text-gray-600 mb-[10px]'>HOW CAN YOU GET INVOLVED?</h3>
            <h4 className='text-gray-600 mb-[200px] text-left ml-[200px]'> 
            There are numerous ways to get involved or donate to The Hurlingham Club Foundation. 
            Firstly, and most simply, you can <span className=" text-blue-700 hover:text-blue-400 hover:underline hover:cursor-pointer">donate here.</span> <br /><br />
            Alternatively, you can contact the Foundation Manager, Leanne Ayin <span className=" text-blue-700 hover:text-blue-400 hover:underline hover:cursor-pointer">(leanne.ayin@hurlinghamclub.org.uk)</span> 
            for any other queries <br /> or to donate over the phone (0207 610 7517). <br />
            In addition, please keep on the lookout for future volunteering opportunities publicised through the Club.
            </h4>
        </div>
        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[2430px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default FoundationCard