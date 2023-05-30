import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { UserContext } from "../../context/UserContext";

export const Navbar = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {

    try{

    
    fetch("http://localhost:5000/profile", {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
       
          setUserInfo(userInfo);
       
      });
    });
  } catch (err){
      return null
  }
  }, []);
  function logout() {
    fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include",
    });
    setUserInfo(null);
  }
  const username = userInfo?.username;
  return (
    <section className="section-nav">
      <header className="header">
        <div className="logo-div">
          <Link to="/" className="logo">
           OpenBlog
          </Link>
        </div>
        <nav className="navbar">
          {username && (
            <>
              <Link to="/create"
        className="btn login nav-links crbtn">Create  post</Link>
              <Link to="/" className="btn login nav-links crbtn" onClick={logout}>
                logout
              </Link>
            </>
          )}
          {!username && (
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
              </button>
            </>
          )}
         
        </nav>
      </header>
      <hr className="hr" style={{height:'2px', marginTop:"3px",color:"red", width:"100%"}}/>
    </section>
  );
};
