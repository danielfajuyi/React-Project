import React from "react";
import "./posts.css";
import { PostsData } from "../../Data/post-data";
import Post from "../Post/post";

const Posts = () => {
  return (
    <>
      <div className="Posts">
        {PostsData.map((post, id) => {
          return <Post data={post} id={id} />;
        })}
      </div>
    </>
  );
};

export default Posts;
