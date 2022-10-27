import React from "react";
import "./right-side.css";
import HomeIcon from "../../img/home.png";
import NotiIcon from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../Trend-card/trend-card";

const RightSide = () => {
  return (
    <>
      <div className="RightSide">
        <div className="nav-icons">
          <img src={HomeIcon} alt="" />
          <UilSetting />
          <img src={NotiIcon} alt="" />
          <img src={Comment} alt="" />
        </div>

        <TrendCard />

        <button className="button right-button">Share</button>
      </div>
    </>
  );
};

export default RightSide;
