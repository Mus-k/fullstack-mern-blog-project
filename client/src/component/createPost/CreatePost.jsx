import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(event) {
    event.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("file", files[0]);
    console.log(files);
    const res = await fetch("http://localhost:5000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (res.ok) {
      setRedirect(true);
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <motion.form
        className="createForm"
        onSubmit={createNewPost}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: "100%" },
          visible: { opacity: 1, y: "0%" },
        }}
      >
        <input
          required
          className="createInput"
          type="title"
          placeholder={"title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="textarea"
          required
          cols={14}
          rows={10}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <input
          className="file"
          required
          type="file"
          onChange={(ev) => setFiles(ev.target.files)}
        />
        <button className="createBtn" style={{ marginTop: "5px" }}>
          Create your post
        </button>
      </motion.form>
    </div>
  );
};
