import React from 'react';
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// for more icons on sidenav import from mui just like above code.
function Sidenav() {
  return (
    
    <div className='sidenav'>
        <h2 className='sidenav_logo'>Dashboard</h2>
      <div className='sidenav_buttons'>
          <button className='sidenav_button'>
            <HomeIcon />
            <span>Home</span>
          </button>
          <button className='sidenav_button'>
            <HistoryIcon />
            <span>History</span>
          </button>
          <button className='sidenav_button'>
            <Diversity3Icon />
            <span>Friends</span>
          </button>
          <button className="sidenav_button">
            <SettingsIcon />
            <span>Settings</span>
          </button>
          <button className="sidenav_button">
            <SupportAgentIcon />
            <span>Support</span>
          </button>
          <button className="sidenav_button">
            <PrivacyTipIcon />
            <span>Privacy</span>
          </button>
      
        <div className='sidenav_more'>
          <button className="sidenav_button">
            <MenuIcon />
            <span>About Us</span>
          </button>
        </div>
      </div>
    </div>

  )
}
// To add more items in sidenav, copy the inner button sidenav_button
export default Sidenav