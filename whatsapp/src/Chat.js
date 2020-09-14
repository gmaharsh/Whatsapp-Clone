import { Avatar, IconButton } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MicIcon from "@material-ui/icons/Mic";
import './Chat.css';
import { InsertEmoticon } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import db from './firebase';

function Chat() {

    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) =>
                    setRoomName(snapshot.data().name
                    ));
        }
    }, [roomId])

    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = (e ) => {
        e.preventDefault();
        console.log(input);
        setInput("");
    }

    return (
      <div className="chat">
        <div className="chat_header">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <div className="chat_headerInfo">
            <h3>{roomName}</h3>
            <p>Last Seen at ...</p>
          </div>
          <div className="chat_headerRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="chat_body">
          <p className={`chat_message ${ true && 'chat_receiver'}`}>
                    <span className="chat_name">R A C H</span>We are besties
                    <span className="chat_timestamp">10:00 AM</span>
          </p>
          <p className="chat_message">We are besties</p>
        </div>
        <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input
                        type="text"
                        onChange = { (e) => setInput(e.target.value)} />
                    <button onClick={sendMessage}
                            type="submit">Send a message</button>
                </form>
            <MicIcon />
        </div>
      </div>
    );
}

export default Chat;
