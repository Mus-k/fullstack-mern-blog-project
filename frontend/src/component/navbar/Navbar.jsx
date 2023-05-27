import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";

export const Navbar = () => {
  useEffect(() => {
    axios
      .get("/api/profile", { withCredentials: true })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
          </button>
        </nav>
      </header>
    </section>
  );
};
