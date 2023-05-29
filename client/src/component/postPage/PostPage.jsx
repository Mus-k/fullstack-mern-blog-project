import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "react-quill/dist/quill.snow.css";
import { formatISO9075 } from "date-fns";

export const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);



 
  if (!postInfo) return "";
  return (
    <section className="post-section">
      <div className="post">
        <img
          src={`http://localhost:5000/${postInfo.cover}`}
          alt="post"
          width="100%"
        />

        <div className="blog-info">
          <h2 className="blog-title">{postInfo.title}</h2>

          <div className="info">
            <p className="authorP">
              <div className="author">
                {" "}
                <span> posted by, </span>
                {postInfo.author.username}
              </div>
            </p>
            <p className="dateP">
              date: <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            </p>
          </div>
          <p className="blog-text">{postInfo.summary}</p>
          <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
      </div>
    </section>
  );
};
