import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
    };

    axiosClient
      .post("/login", payload)
      .then((response) => {
        const data = response.data.data;
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        console.log("Error:", err);
      });

    console.log(payload);
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Login into your account</h1>

          {/* {message &&
          <div className="alert">
            <p>{message}</p>
          </div>
        } */}

          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Not registered? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default login;
