import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import db from './firebase';
import { Link } from 'react-router-dom';

import './SidebarChat.css';

function SidebarChat( {id , name, addNewChat} ) {

    const [seed, setSeed] = useState("");
    const [messages, setMessage] = useState("");

    useEffect(() => {
        if (id) {
            console.log(id)
            db.collection("rooms").doc(id).collection("messages").orderBy("timestamp", "desc").onSnapshot((snapshot) => setMessage(snapshot.docs.map((doc) => doc.data()))
            );
        }
    },[id])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for Chat");
        
        if (roomName) {
            //do some clever stuff for database
            db.collection('rooms').add({
                name: roomName
            });
        }
    };

    return !addNewChat ? (
      <Link to={`/rooms/${id}`}>
        <div className="SidebarChat">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <div className="sidebarChat_info">
            <h2>{name}</h2>
            <p>{messages[0]?.message}</p>
          </div>
        </div>
      </Link>
    ) : (
      <div className="SidebarChat" onClick={createChat}>
        <h2>Add New Chat</h2>
      </div>
    );
}

export default SidebarChat;
