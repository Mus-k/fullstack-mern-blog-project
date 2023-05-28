import React, { useState } from "react";
import { Navigate } from "react-router-dom";
//import { Navigate } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  //const [wronginfo, setWrongInfo] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    } else {
      alert("wrong credentials");
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <section className="loginSection">
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={login} className="" action="">
            <h2 className="regTitle">Login</h2>
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
            <button className="loginbtn">Login</button>
            {/* { wronginfo && <p>please check your 
            username or password</p>} */}
          </form>
        </div>
      </div>
    </section>
  );
};
