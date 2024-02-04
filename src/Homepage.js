import React from 'react'
import Sidenav from './navigation/Sidenav';
import Timeline from './timeline/Timeline';
import './Homepage.css'

function Homepage() {
  return (
    <div>
        <nav>
            <Sidenav />
        </nav>
        <div className=  'bg-sky-600 overflow-y-auto'>
            <Timeline />
        </div>
    
    </div>
  )
}

export default Homepage