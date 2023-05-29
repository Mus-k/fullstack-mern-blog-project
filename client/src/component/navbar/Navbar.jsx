import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { UserContext } from "../../context/UserContext";



export const Navbar =() => {
  const {setUserInfo, userInfo}=useContext(UserContext)

  useEffect(() => {
  fetch("http://localhost:5000/profile" ,{
    credentials:"include"
  }).then(res=>{
    res.json().then(userInfo=>{
      setUserInfo(userInfo)
    })
  })
 
  }, []);
  function logout(){
    fetch("http://localhost:5000/logout", {
      method:"POST",
      credentials:"include"
    })
    setUserInfo(null)
  }
  const username= userInfo?.username;
    return (
    <section className="section-nav">
      <header className="header">
        <div className="logo-div">
          <Link to="/" className="logo">
            Logo
          </Link>
        </div>
        <nav className="navbar">
          {username && (
            <>
            <Link to ='/create'>Create new post</Link>
            <Link to ='/'
            onClick={logout}>logout</Link></>
           
          )}
          {
            !username &&(
              <>
              <button className="btn login">
            {" "}
            <Link to="/login" className="nav-links">
              Login
            </Link>
          </button>
          <button className="btn registerbtn">
            <Link to="/register" className="nav-links">
              Register
            </Link>
          </button></>
            )
          }
        </nav>
      </header>
    </section>
  );
};
