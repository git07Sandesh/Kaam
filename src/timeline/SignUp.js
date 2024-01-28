import React from 'react'
import "./SignUp.css";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Signup() {
  return (
    <div className='head_right'>
      
      <div className='profile'>
        <img src = "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='logo' alt = 'logo'></img>
      </div>

      <div className='profile_dropdown'>
        <div className='profile_pic'>      
          <img src = "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='logo' alt = 'logo'></img>
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
      </div>
      
    </div>

  )
}

export default Signup;
