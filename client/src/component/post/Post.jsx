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
  content,
  createdAt,
}) => {
  return (
    <section className="post-section">
      <div className="post">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:5000/" + cover} alt="post" width="100%" />
        </Link>

        <div className="blog-info">
          <Link to={`/post/${_id}`}>
            <h2 className="blog-title">{title}</h2>
          </Link>

          <div className="info">
            <p className="authorP">
              <Link to="/author" className="author">
                {" "}
                <span> posted by, </span>
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
