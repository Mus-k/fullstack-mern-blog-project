import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
//import { Navigate } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const [wronginfo, setWrongInfo] = useState(false);

  const handleChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setWrongInfo(false);
    }
  };
  const handleChanges = (event) => {
    setUsername(event.target.value);
    if (event.target.value) {
      setWrongInfo(false);
    }
  };
  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      setWrongInfo(true);
    }

    setUsername("");
    setPassword("");
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
                placeholder="username"
                required
                onChange={handleChanges}
              />
            </div>
            <div className="inputbox">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                name="password"
                required
                value={password}
                placeholder="password"
                onChange={handleChange}
              />
            </div>
            <button className="loginbtn">Login</button>
            {wronginfo && (
              <p style={{ color: "red", textAlign: "center" }}>
                please check your username and password
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
