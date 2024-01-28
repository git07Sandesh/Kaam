import React from 'react';
import Group from './groups/Group';
import "./Timeline.css";
import Signup from './SignUp';
import { Avatar } from '@mui/material'
function Timeline() {
  return (
    <div className='timeline'>
      <header className='timeline_header'>
          <div className='header_story'>
            <div className='header_story image_container'>
              <Avatar>
                <img src= "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile"></img>
              </Avatar>
            </div>
              <div className='user-info'>
                Hi there,
                  <span><h3>username</h3></span>
              </div>
          </div>
          <div className='timeline_header_right'>
            <Signup />
          </div>         
        </header>
        
        <div className='timeline_groups'>
          <Group />
        </div>
      
    </div>
  )
}

export default Timeline