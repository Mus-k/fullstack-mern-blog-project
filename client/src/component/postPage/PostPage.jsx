import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../../context/UserContext";

export const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
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
            {userInfo.id === postInfo.author._id && (
              <div>
                <Link to={`/edit/${postInfo._id}`}>Edit </Link>
              </div>
            )}
            <p className="dateP">
              date: <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            </p>
          </div>
          <p className="blog-text">{postInfo.summary}</p>

          {/* <div
            className="content"
            dangerouslySetInnerHTML={{ __html: postInfo.content }}
          /> */}
        </div>
      </div>
    </section>
  );
};
