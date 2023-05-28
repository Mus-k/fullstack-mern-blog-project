import React, { useState } from "react";

import "./LogReg.css";
export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    
    const response=await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if(!response.ok){
alert("failed")
    } else {
      alert("succeed")
    }
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
