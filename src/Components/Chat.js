import React from "react";
import camera from "../Img/cam-recorder.png";
import add from "../Img/follow.png";
import more from "../Img/more (1).png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img alt="" src={camera} />
          <img alt="" src={add} />
          <img alt="" src={more} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
