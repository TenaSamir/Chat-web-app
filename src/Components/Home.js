import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chat from "./Chat";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.getFirestore();
  //     const snapshot = await db.collection("myCollection").get();
  //     const fetchedData = snapshot.docs.map((doc) => doc.data());
  //     setData(fetchedData);
  //   };

  //   fetchData();
  // }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/Login");
        console.log("auth");
        alert("Signed out successfully");
      })
      .catch(console.error());
  };

  return (
    <div>
      <h1>Welcome</h1>
      <p>This is the Home Page, if you can see this you're logged in.</p>
      <button onClick={handleLogout}>Sign out</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
