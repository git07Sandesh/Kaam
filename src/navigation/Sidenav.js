import React from 'react';
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
// for more icons on sidenav import from mui just like above code.
function Sidenav() {
  return (
    <div className='sidenav'>
      <img className='sidenav_logo' src = "" alt = ""></img>
      <div className='sidenav_buttons'>
        <button className='sidenav_button'>
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className='sidenav_button'>
          <InfoIcon />
          <span>About Us</span>
        </button>
      </div>
      <div className='sidenav_more'>
        <button className="sidenav_button">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  )
}
// To add more items in sidenav, copy the inner button sidenav_button
export default Sidenav