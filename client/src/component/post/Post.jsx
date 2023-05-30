import React from "react";
import "./Post.css";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export const Post = ({
  _id,
  title,
  summary,
  cover,
  author,
  createdAt,
}) => {
  return (
    <section
      className="post-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="post">
        <div className="image">
          <Link className="image" to={`/post/${_id}`}>
            <img src={"http://localhost:5000/" + cover} alt="post" />
          </Link>
        </div>

        <div className="blog-info">
          <Link className="blog-title" to={`/post/${_id}`}>
            <h2 className="blog-title">{title}</h2>
          </Link>

          <div className="info">
            <p className="authorP">
              <span> posted by, </span>
              <Link to={`/post/${_id}`} className="author">
                {" "}
                {author.username}
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
