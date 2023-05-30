import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LogReg.css";
export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registed, setRegisted] = useState(false);

  const register = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      setRegisted(false);
    } else {
      setRegisted(true);
    }
    setUsername("");
    setPassword("");
  };
  return (
    <section onSubmit={register} className="register">
      <motion.div
        className="form-box"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="form-value">
          <form className="" action="">
            <h2 className="regTitle">Register</h2>
            <div className="inputbox">
              <i className="fa-regular fa-user"></i>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="inputbox">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="loginbtn" disabled={registed}>
              {registed ? "thanks for the Registration" : "Register"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};
