import React, { useEffect, useState } from "react";
import { Post } from "../post/Post";

export const Home = () => {
  const [posts, setPosts]=useState([])
  useEffect(() => {
    fetch("http://localhost:5000/createPost").then((response) => {
      response.json().then((posts) => {
       setPosts(posts);
      });
    });
  }, []);
  return (
    <div>
      <h2 style={{ textAlign: "center", fontSize: "26px", color: "white" }}>
        Welcome to my blog post
      </h2>
      {
        posts.length > 0 && posts.map(post=>(
          <Post {...post}/>
        ))
      }
     
     
    </div>
  );
};
