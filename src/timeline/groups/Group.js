import React from 'react'
import "./Group.css"
import { Avatar } from '@mui/material'
import { useState } from 'react';

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
    <div className='group'>
      <div className='group_header'>
        <Avatar>R</Avatar>
        userName_ • <span>duee date</span>
      </div>
      
      <div className='group_body'>
        {isCreatingGroup && (
          <div className='input_container'>
            <input
              type="text"
              placeholder="Enter group name"
              value={groupName}
              onChange={handleGroupNameChange}
            />
            <button className='add_group' onClick={handleCreateButtonClick}>
              Create Group
            </button>
          </div>
        )}

        {createdGroups.map((group, index) => (
          <div key={index} className='created_group'>
            {group}
          </div>
        ))}

        {!isCreatingGroup && (
          <button className='add_group' onClick={handleCreateGroupClick}>
            Create Group +
          </button>
        )}
      </div>
    </div>
  );
}

export default Group;