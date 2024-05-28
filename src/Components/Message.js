import React from "react";
import satoru from "../Img/Satoru-Gojo.webp";
const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={satoru} alt="" />
        <span>Just Now</span>
      </div>
      <p className="messageContent">ازيك وازى امك</p>
    </div>
  );
};

export default Message;
