import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  //const [wronginfo, setWrongInfo] = useState(false);

  const login = (e) => {
    e.preventDefault();

    axios
      .post(
        "/api/login",
        {
          username: username,
          password: password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error);
        // setWrongInfo(true)
      });
    setUsername("");
    setPassword("");
  };
  if (redirect) {
    return <Navigate to="/" />;
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
