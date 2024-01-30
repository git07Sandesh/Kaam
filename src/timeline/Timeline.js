import React from 'react';
import Group from './groups/Group';
import "./Timeline.css";
import Signup from './SignUp';
import { Avatar } from '@mui/material'
function Timeline() {
  return (
  <div className="relative left-36 flex flex-col h-[100vh] w-[300vh] md:w-[100%]">
      <header className="relative w-full pl-12 flex flex-col mb-30 bg-cyan-500 text-black pt-10">
          <div className='fixed top-[30px] flex flex-row'>
            <div className='pl-3 hover:cursor-pointer hover:scale-150 transition duration-150 ease-in-out'> {/*THis is for story circle*/}
              <Avatar>
                <img className= "cursor-pointer h-full w-full object-cover" src= "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile"></img>
              </Avatar>
            </div>
              <div className="relative top-[-8px] flex flex-col items-start pl-4">
                Hi there,
                  <span className='mt-[4px]'><h3 className='ml-3 text-xl font-bold'>username</h3></span>
              </div>
          </div>
          <div>
            <Signup />
          </div>         
      </header>
        
        <div>
          <Group />
        </div>
      
    </div>
  )
}

export default Timeline