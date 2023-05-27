import React, { useState } from "react";
import axios from "axios";
import "./LogReg.css";
export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    axios
      .post("/api/register", {
        username: username,
        password: password,
      },
      { withCredentials: true })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setUsername("");
    setPassword("");
  };
  return (
    <section onSubmit={register} className="register">
      <div className="form-box">
        <div className="form-value">
          <form className="" action="">
            <h2 className="regTitle">Register</h2>
            <div className="inputbox">
              <i className="fa-regular fa-user"></i>
              <input
                type="text"
                name="username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">username</label>
            </div>
            <div className="inputbox">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label htmlFor="password">password</label>
            </div>
            <button className="loginbtn">Register</button>
          </form>
        </div>
      </div>
    </section>
  );
};
