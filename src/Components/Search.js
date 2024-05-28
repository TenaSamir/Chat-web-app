import React from "react";
import mikasa from "../Img/emma.jpg";
const Search = () => {
  return (
    <div className="searchh">
      <div className="searchInput">
        <input type="search" placeholder="Find your Friend" />
      </div>
      <div className="userChat">
        <img src={mikasa} />
        <div className="userChatInfo">
          <span>Tena Samir</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
