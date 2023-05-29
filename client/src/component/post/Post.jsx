import React from "react";
import "./Post.css";
import { formatISO9075 } from "date-fns";
import { default as postImg1 } from "../../assets/images/5298787.jpg";
import { default as postImg2 } from "../../assets/images/rm380-socialmedia-18-455.jpg";
import { Link } from "react-router-dom";
export const Post = ({ title, summary, cover, content, createdAt }) => {
  return (
    <section className="post-section">
      <div className="post">
        <img src={cover} alt="post" width="100%" />
        <div className="blog-info">
          <h2 className="blog-title">{title}</h2>
          <div className="info">
            <p className="authorP">
              <Link to="/author" className="author">
                {" "}
                <span> posted by, </span>Musa
              </Link>
            </p>
            <p className="dateP">
              date: <time>{formatISO9075(new Date(createdAt))}</time>
            </p>
          </div>
          <p className="blog-text">{summary}</p>
        </div>
      </div>
    </section>
  );
};
