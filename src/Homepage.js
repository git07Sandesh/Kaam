import React from 'react'
import Sidenav from './navigation/Sidenav';
import Timeline from './timeline/Timeline';

function Homepage() {
  return (
    <div className='flex h-full w-full'>
        <nav>
            <Sidenav />
        </nav>
        <div className= 'flex h-full w-full bg-sky-600 overflow-y-auto'>
            <Timeline />
        </div>
    
    </div>
  )
}

export default Homepage