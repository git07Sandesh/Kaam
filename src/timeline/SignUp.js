import React from 'react'
import "./SignUp.css";
//import LogoutIcon from '@mui/icons-material/Logout';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material'

function Signup() {
  return (
    <div className='relative flex z-10'>
      
      <div className='relative top-[20px] right-[0px]'>
        <Avatar className = 'fixed inline-flex items-center justify-center hover:scale-75 focus:ring transition duration-150 ease-in-out'>
          <img className='cursor-pointer rounded-3xl w-[40px] h-[40px]' src = "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt = 'logo'></img>
        </Avatar>  
      </div>
{/* <div className='m-[5px] mr-[15px] top-[20px] right-[10px]'>
        <div className='inline-flex items-center justify-center w-[50px] h-[50px]'>      
          <img className = '' src = "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt = 'logo'></img>
          <h4>username</h4>
        </div>
          <hr />

        <div className='dropdown_elements'>
          <a href="/img" className='profile_link'>
            <AccountCircleIcon />
            <span>Edit Profile</span>
          </a>
          <a href="/img" className='profile_link'>
            <LogoutIcon />
            <span>LogOut</span>
          </a>
        </div>
      </div>*/}
      
      
    </div>

  )
}

export default Signup;
