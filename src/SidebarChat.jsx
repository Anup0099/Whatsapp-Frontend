import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
function SidebarChat() {
  return (
    <div>
      <div className="sidebarChat">
        <Avatar src="src\1600189077642.jpg" />
        <div className="sidebarChat">
          <h2>Room name</h2>
          <p>
            
            This is the last msg
          </p>
        </div>
      </div>
    </div>
  );
}

export default SidebarChat;
