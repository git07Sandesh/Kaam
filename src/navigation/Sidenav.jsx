import React from 'react';

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
    
    <div className='fixed w-48 l-0 flex flex-col justify-between text-neutral-200 h-full z-10 bg-[#1C7C54]'>
        <h2 className='fixed w-30 m-9 text-xl font-bold text-neutral-200'>Dashboard</h2>
      <div className=' fixed mt-14 pl-4 pt-10 flex flex-col flex-1'>
          <button className="flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-20 hover:bg-slate-600">
            <HomeIcon />
            <span className='text-neutral-200 text-lg font-bold ml-4'>Home</span>
          </button>
          <button className="flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-20 hover:bg-slate-600">
            <HistoryIcon />
            <span className='text-neutral-200 text-lg font-bold ml-4'>History</span>
          </button>
          <button className="flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-20 hover:bg-slate-600">
            <Diversity3Icon />
            <span className='text-neutral-200 text-lg font-bold ml-4'>Friends</span>
          </button>
          <button className="flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-20 hover:bg-slate-600">
            <SettingsIcon />
            <span className='text-neutral-200 text-lg font-bold ml-4'>Settings</span>
          </button>
          <button className="flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-20 hover:bg-slate-600">
            <SupportAgentIcon />
            <span className='text-neutral-200 text-lg font-bold ml-4'>Support</span>
          </button>
          <button className="flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-20 hover:bg-slate-600">
            <PrivacyTipIcon />
            <span className='text-neutral-200 text-lg font-bold ml-4'>Privacy</span>
          </button>
      
        <div className='fixed bottom-3'>
          <button className="flex items-center bg-transparent border-0 m-1 p-3 rounded-lg  hover:cursor-pointer hover:bg-opacity-20 hover:bg-slate-600">
            <MenuIcon />
            <span className='text-neutral-200 text-lg font-bold ml-4'>About Us</span>
          </button>
        </div>
      </div>
    </div>

  )
}
// To add more items in sidenav, copy the inner button sidenav_button
export default Sidenav