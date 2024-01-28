import React from 'react'
import "./Homepage.css";
import Sidenav from './navigation/Sidenav';
import Timeline from './timeline/Timeline';

function Homepage() {
  return (
    <div className='homepage'>
        <nav className='homepage_nav'>
            <Sidenav />
        </nav>
        <div className='homepage_timeline'>
            <Timeline />
        </div>
    
    </div>
  )
}

export default Homepage