import React from "react";
import FollowersCard from "../Follower-card/followers-card";
import LogoSearch from "../Logo-search/logo-search";
import ProfileCard from "../Profile-card/profile-card";
import "./profile-side.css";

const ProfileSide = () => {
  return (
    <>
      <div className="ProfileSide">
        {/* after 2hours of debugging, the bug was, 
        i used 'classname' instead of' className'  chai! */}
        <LogoSearch />
        <ProfileCard />
        <FollowersCard />
      </div>
    </>
  );
};

export default ProfileSide;
