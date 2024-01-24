import React from 'react';
import Group from './groups/Group';
import "./Timeline.css";
import Signup from './SignUp';
function Timeline() {
  return (
    <div className='timeline'>
      <div className='timeline_left'>
        <div className='timeline_groups'>
          <Group />
        
        </div>
      </div>
      <div className='timeline_right'>
        <Signup />
      </div>
    </div>
  )
}

export default Timeline