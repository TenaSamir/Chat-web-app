import React from "react";
import attach from "../Img/paperclip (1).png";
import send from "../Img/paper-plane.png";
import img from "../Img/add-image (1).png";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={img} alt="" />{" "}
        </label>

        <img className="sendButton" src={send} alt="" />
      </div>
    </div>
  );
};

export default Input;
