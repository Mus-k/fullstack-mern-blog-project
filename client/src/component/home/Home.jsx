import React, { useEffect, useState } from "react";
import { Post } from "../post/Post";
import {motion} from "framer-motion";


export const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div>

    
    <motion.div
    initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
   >
      <h2
        style={{
          textAlign: "center",
          fontSize: "26px",
          color: "purple",
          margin: "50px",
        }}
      >
        Welcome to the open blog post
      </h2>

      {posts.length > 0?
        posts.map((post) => <Post key={post.id} {...post} />):
        <div style={{textAlign:"center", fontSize:"50px"}}>loading .....</div>}
    </motion.div>
    
    </div>
  );
};
