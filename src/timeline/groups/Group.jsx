import React from 'react'
import { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SortIcon from '@mui/icons-material/Sort';

function Group() {
  const [isCreatingGroup, setCreatingGroup] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [createdGroups, setCreatedGroups] = useState([]);

  const handleCreateGroupClick = () => {
    setCreatingGroup(true);
  };

  const handleGroupNameChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleCreateButtonClick = () => {
    // Handle the logic for creating the group with the entered group name
    console.log('Creating group with name:', groupName);

    // Update the list of created groups
    setCreatedGroups([...createdGroups, groupName]);

    // Reset the state after creating the group
    setCreatingGroup(false);
    setGroupName('');
  };

  return (
    <div className='fixed w-full left-[12rem] flex flex-col h-full top-[6rem] z-0 bg-[#73E2A7]'>

  <div className='flex m-3 p-2 font-extrabold'>
    My Groups
  </div>

  <div className='ml-4 p-3 flex flex-wrap'>
    {createdGroups.map((group, index) => (
      <div key={index} className='m-2 p-3 w-48 h-48 rounded-3xl bg-[#6ccff6]'>
        <a href='/groups' className='flex justify-center p-1 font-bold hover:text-teal-300 '>{group}</a>
        <div className='relative flex flex-row justify-end top-[7rem] gap-1'> 

            <button><SummarizeIcon /></button>
            <button><SortIcon /> </button>
            <button><ShareIcon /></button>
            
        </div>
      </div>
    ))}

    {isCreatingGroup ? (
      <div className='m-2 p-3 w-48 h-48 rounded-3xl flex flex-col justify-evenly bg-[#6ccff6]'>
        <input
          className='w-36 h-8 justify-center rounded-3xl text-black'
          type="text"
          placeholder="Group name"
          value={groupName}
          onChange={handleGroupNameChange}
        />
        <button
          className='w-32 h-12 rounded-xl hover:cursor-pointer bg-[#6ccff6]'
          onClick={handleCreateButtonClick}
        >
          Create Group
        </button>
      </div>
    ) : (
       (
        <button
          className='m-2 p-3 w-48 h-48 font-extrabold rounded-3xl bg-[#6ccff6]'
          onClick={handleCreateGroupClick}
        >
          Create Group +
        </button>
      )
    )}
  </div>

</div>
  );
}

export default Group;