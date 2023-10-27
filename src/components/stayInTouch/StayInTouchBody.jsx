import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Hurlingham_logo.png'
import StayInTouchNavBar from './StayInTouchNavBar';

function StayInTouchBody() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (event) =>{
        event.preventDefault();
        navigate("/#");
    }

  return (
    <div className='h-[900px] w-full bg-[#f8f8f8] '>
        <StayInTouchNavBar/>
        <div className=''>
            <h1 className='text-4xl pt-[50px] mb-[40px]'>STAY IN TOUCH</h1>
            <h3 className='text-2xl mb-[100px]'>Be the first to hear about news and offers at The Hurlingham Club. </h3>
            <div className=' ml-[1px]'>
                <label htmlFor="First Name" className='text-xl mr-[600px]'>Full Name</label><br />
                <input type="text" className='mt-[10px] py-3 px-[500px] border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setName(e.target.value)}/>
            </div>
            <div className=' ml-[1px]'>
            <label htmlFor="email" className='text-xl mr-[565px] '>Email Address</label> <br className='mt-[50px]' />
                <input type="text" className='mt-[10px] ml-[10px] px-[500px] py-3 border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setEmail(e.target.value)}/>
            </div>
            <div className='mr-[270px]'>
                <h1>What type of events are you interested in hearing more about?</h1>
                <h1 className='mr-[260px]'>Please tick all that apply</h1>
            </div>
            <div>
                <label for="myCheckbox" className="flex items-center ml-[339px]">
                <input type="checkbox" id="myCheckbox" name="myCheckbox" class="form-checkbox text-indigo-600 h-5 w-5"/>
                <span className="mt-[10px] text-lg" >Corporate Events</span>
                </label>
            </div>
            <div>
                <label for="myCheckbox" className="flex items-center ml-[339px]">
                <input type="checkbox" id="myCheckbox" name="myCheckbox" class="form-checkbox text-indigo-600 h-5 w-5"/>
                <span className="ml-[px] text-lg" >Private Events</span>
                </label>
            </div>
            
            <div>
                <label for="myCheckbox" class="flex items-center">
                <span className="ml-[350px] text-lg" >Please confirm you would like to receive news and offers from The Hurlingham Club Events</span>
                <input type="checkbox" id="myCheckbox" name="myCheckbox" className="form-checkbox text-indigo-600 h-5 w-5 "/>
                </label>
            </div>
            
            <button  onClick= {handleSubmit} className="bg-[#4e9eb8] text-white py-3 px-[80px] mt-[20px] mr-[480px] hover:bg-[#436e86]">SUBMIT</button>
        </div>
        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[945px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default StayInTouchBody