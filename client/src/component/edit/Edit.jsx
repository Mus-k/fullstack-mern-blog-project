import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigate, useParams } from "react-router-dom";

export const Edit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
      });
    });
  }, []);

  async function updatePost(event) {
    event.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }

    const response = await fetch("http://localhost:5000/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }
  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }
  return (
    <div>
      {" "}
      <motion.form
        className="createForm"
        onSubmit={updatePost}
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
          className="createInput"
          type="title"
          placeholder={"title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="textarea"
          cols={14}
          rows={10}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <button className="createBtn" style={{ marginTop: "5px" }}>
          edit your post
        </button>
      </motion.form>
    </div>
  );
};
