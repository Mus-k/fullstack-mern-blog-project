import React from 'react'
import { Post } from '../post/Post'

export const Home = () => {
  return (
    <div>
     
        <h2 style={{textAlign:"center", fontSize:"26px", color:"white"}}>
        Welcome to my blog post
      </h2>
        <Post/>
        <Post/>
    </div>
  )
}
