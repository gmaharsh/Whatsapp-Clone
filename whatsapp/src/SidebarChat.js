import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from 'react';

import './SidebarChat.css';

function SidebarChat( {addNewChat} ) {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for Chat");
        
        if (roomName) {
            //do some clever stuff for database
        }
    };

    return !addNewChat ? (
      <div className="SidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat_info">
          <h2>Room Name</h2>
          <p>Last Message...</p>
        </div>
      </div>
    ) : (
            <div className="SidebarChat" onClick={createChat}>
                <h2>Add New Chat</h2>
            </div>
    );
}

export default SidebarChat;
