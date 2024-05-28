import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Input from "./Input";
const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};
export default Main;
