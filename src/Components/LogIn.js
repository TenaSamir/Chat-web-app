import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../firebase.js";
import { NavLink, useNavigate } from "react-router-dom";
import { Route } from "react-router";
import Home from "./Home.js";
const LogIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error);
      alert("Wrong user name or Password");
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form onSubmit={submitHandler}>
          <span className="logo">TaTa Chat</span>
          <p className="title">Log Into your account</p>
          <div>
            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required={true}
              {...register("email", {
                required: "Email is Required!!!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={Boolean(errors.email)}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div>
            <label>Your password</label>
            <input
              name="password"
              id="password"
              type="password"
              autoComplete="off"
              className={`form-control ${errors.password && "invalid"}`}
              required={true}
              {...register("password", {
                required: "You should enter your password",
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
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          You do not have an account? <a href="Register">Sign up</a>
        </p>
      </div>
    </div>
  );
};
export default LogIn;
