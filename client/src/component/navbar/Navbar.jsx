import React, {  useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";



export const Navbar =() => {
  const [username, setUsername]=useState(null)
  useEffect(() => {
  fetch("http://localhost:5000/profile" ,{
    credentials:"include"
  })
 
  }, []);
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
            <Link to ='/'>logout</Link></>
           
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
