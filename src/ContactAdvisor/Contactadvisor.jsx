// import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import './Contactadvisor.css'



const socket = io.connect("http://localhost:3001");

function Contactadvisor() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <>
    {/* <h1>plase enter room id 123 to contact our advisor</h1> */}
    <div className="Contact">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="please enter your name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="please enter Advisor name"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button class="joinroombtn" onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
    </>
  );
}

export default Contactadvisor;
