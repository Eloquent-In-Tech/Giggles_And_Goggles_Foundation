import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Hurlingham_logo.png'

function StayInTouchBody() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (event) =>{
        event.preventDefault();
        navigate("/#");
    }

  return (
    <div className='h-[1100px] w-full bg-[#f8f8f8] '>
        <div className=''>
            <div className=' ml-[10px]'>
                <label htmlFor="First Name" className='text-2xl mr-[152px]'>Full Name</label>
                <input type="text" className='mt-[10px] py-4 px-[80px] border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setName(e.target.value)}/>
            </div>
            <div className=' ml-[10px]'>
            <label htmlFor="email" className='text-2xl mr-[120px]'>Email Address*</label>
                <input type="text" className='mt-[10px] ml-[10px] px-[80px] py-4 border-gray-400 border pl-[20px] bg-[#f8f8f8]'
                onChange={e=> setEmail(e.target.value)}/>
            </div>
            <div>
                <label for="myCheckbox" class="flex items-center">
                <input type="checkbox" id="myCheckbox" name="myCheckbox" class="form-checkbox text-indigo-600 h-5 w-5"/>
                <span className="ml-[400px] text-2xl" >Corporate Events</span>
                </label>
            </div>
            <div>
                <label for="myCheckbox" class="flex items-center">
                <input type="checkbox" id="myCheckbox" name="myCheckbox" class="form-checkbox text-indigo-600 h-5 w-5"/>
                <span className="ml-[400px] text-2xl" >Private Events</span>
                </label>
            </div>
            <div>
                <label for="myCheckbox" class="flex items-center">
                <span className="ml-[400px] text-2xl" >Please confirm you would like to receive news and offers from The Hurlingham Club Events</span>
                <input type="checkbox" id="myCheckbox" name="myCheckbox" class="form-checkbox text-indigo-600 h-5 w-5"/>
                </label>
            </div>
            
            <button  onClick= {handleSubmit} className="bg-[#4e9eb8] text-white py-3 px-[80px] mt-[20px] mr-[430px] hover:bg-[#436e86]">SUBMIT</button>
        </div>
        <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[1145px] left-[600px]">
            <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default StayInTouchBody