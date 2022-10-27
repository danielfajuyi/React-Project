import React from "react";
import FollowersCard from "../Follower-card/followers-card";
import InfoCard from "../InfoCard/InfoCard";
import LogoSearch from "../Logo-search/logo-search";
import "./ProfileLeft.css";

const ProfileLeft = () => {
  return (
    <>
      <div className="ProfileLeft">
        <LogoSearch />
        <InfoCard />
        <FollowersCard />
      </div>
    </>
  );
};

export default ProfileLeft;
