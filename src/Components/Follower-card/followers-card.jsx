import React from "react";
import "./followers-card.css";
import { Followers } from "../../Data/followers-data";

const FollowersCard = () => {
  return (
    <>
      <div className="FollowersCard">
        <h3>Who is following you</h3>

        {Followers.map((follower, id) => {
          return (
            <>
              <div className="follower">
                <div>
                  <img src={follower.img} className="follower-img" alt="" />
                  <div className="follower-name">
                    <span>{follower.name}</span>
                    <span>@{follower.username}</span>
                  </div>
                </div>
                <button className="button follow-btn">Follow</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FollowersCard;
