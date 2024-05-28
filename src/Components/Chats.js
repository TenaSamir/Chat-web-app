import React from "react";
import guju from "../Img/Satoru-Gojo.webp";
import migumy from "../Img/m.jpg";
import mikasa from "../Img/dg6ynvj-f97ae283-b41b-47af-a23d-830a0edca069.jpg";
import Inumaki from "../Img/fdb2f89be330dc39aa85f63adfe852c1.jpg";
const Chats = () => {
  return (
    <div className="searchh" style={{ border: "none" }}>
      <div className="userChat">
        <img src={mikasa} alt="" />
        <div className="userChatInfo">
          <span>Mikasa</span>
          <p>Where are you?</p>
        </div>
      </div>
      <div className="userChat">
        <img src={migumy} alt="" />
        <div className="userChatInfo">
          <span>Megumi</span>
          <p>Let me see</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Inumaki} alt="" />
        <div className="userChatInfo">
          <span>Inumaki San</span>
          <p>Tuna Tuna !</p>
        </div>
      </div>
      <div className="userChat">
        <img src={guju} alt="" />
        <div className="userChatInfo">
          <span>Gojo Sensei</span>
          <p>Hichu?</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
