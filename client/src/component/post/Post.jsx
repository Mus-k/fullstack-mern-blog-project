import React from "react";
import "./Post.css";
import { default as postImg1 } from "../../assets/images/5298787.jpg";
import { default as postImg2 } from "../../assets/images/rm380-socialmedia-18-455.jpg";
import { Link } from "react-router-dom";
export const Post = () => {
  return (
    <section className="post-section">
      <div className="post">
        <img src={postImg1} alt="post" width="100%" />
        <div className="blog-info">
          <h2 className="blog-title">Creating and nesting components</h2>
          <div className="info">
            <p  className="authorP">
            <Link to="/author" className="author">
                {" "}
                <span> posted by, </span>Musa
              </Link>
            </p>
            <p  className="dateP">
              date: <time>2023-01-06 16:45</time>
            </p>
          </div>
          <p className="blog-text">
            React apps are made out of components. A component is a piece of the
            UI (user interface) that has its own logic and appearance. A
            component can be as small as a button, or as large as an entire
            page.{" "}
          </p>
        </div>
      </div>
      {/* second blog */}
      <div className="post">
        <img src={postImg2} alt="post" width="100%" />
        <div className="blog-info">
          <h2 className="blog-title">Creating and nesting components</h2>
          <div className="info">
            <p className="authorP">
              <Link to="/author" className="author">
                {" "}
                <span> posted by, </span>Musa
              </Link>
            </p>
            <p className="dateP">
              date: <time>2023-01-06 16:45</time>
            </p>
          </div>
          <p className="blog-text">
            React apps are made out of components. A component is a piece of the
            UI (user interface) that has its own logic and appearance. A
            component can be as small as a button, or as large as an entire
            page.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
