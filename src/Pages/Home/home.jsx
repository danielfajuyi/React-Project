import React from "react";
import "./home.css";
import ProfileSide from "../../Components/Profile-side/profile-side";
import PostSide from "../../Components/Post-side/post-side";
import RightSide from "../../Components/Right-side/right-side";

const Home = () => {
  return (
    <>
      <div className="Home">
        <ProfileSide />
        <PostSide />
        <RightSide />
      </div>
    </>
  );
};

export default Home;
