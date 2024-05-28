import React from "react";
import leviAvatar from "../Img/360099987_580294740971588_7705216063966497764_n.jpg";
const Navbar = () => {
  return (
    <div className="nav">
      <span className="logo">TaTa Chat</span>
      <div className="user">
        <img src={leviAvatar} className="avatar" alt="" />
        <span className="userName">Levi </span>
        <button className="logOut">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
