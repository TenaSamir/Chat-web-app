import React, { useState } from "react";
import "./style.scss";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, storage } from "../firebase";
import { useForm } from "react-hook-form";
import { db } from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import photo from "../Img/d.png";
const Register = () => {
  const navigate = useNavigate();
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [name, setName] = useState("");
  var [err, setErr] = useState(false);
  var [imgg, setImgg] = useState("");
  var {
    watch,
    register,
    formState: { errors },
  } = useForm();
  const onhandleSubmit = async (e) => {
    e.preventDefault();
    setName = e.target[0].value;
    setEmail = e.target[1].value;
    setPassword = e.target[2].value;
    setImgg = e.target[3].files[0];
    console.log(e.target[0].value);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, name);
      await uploadBytesResumable(storageRef, imgg).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              name,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              name,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form onSubmit={onhandleSubmit}>
          <span className="logo">TaTa Chat</span>
          <p className="title">Create an account</p>
          <input
            placeholder="Your name"
            name="name"
            type="name"
            value={name}
            required={true}
            defaultValue=""
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Your Email"
            id="email"
            name="email"
            type="email"
            value={email}
            required={true}
            {...register("email", {
              required: "Email is Required!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid Email address",
              },
            })}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <input
            placeholder="Your password"
            id="password"
            name="password"
            type="password"
            value={password}
            autoComplete="off"
            required={true}
            {...register("password", {
              required: "You should set a password",
              pattern: {
                value:
                  "^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[d]){1,})(?=(.*[W]){    1,})(?!.*s).{8,}$",
                message:
                  "Password should contain at least one number and one    special character",
              },
              minLength: {
                value: 8,
                message: "Password must be more than 8 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must be less than 20 characters",
              },
            })}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file" style={{ color: "GrayText" }}>
            <img src={photo} style={{ width: "40px", cursor: "pointer" }} />
            Choose your picture
          </label>

          <button>Create an account</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <a href="LogIn">Login</a>
        </p>
      </div>
    </div>
  );
};
export default Register;
