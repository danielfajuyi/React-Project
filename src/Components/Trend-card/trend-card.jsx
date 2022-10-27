import React from "react";
import "./trend-card.css";
import { TrendData } from "../../Data/trend-data";

const TrendCard = () => {
  return (
    <>
      <div className="TrendCard">
        <h3>Trends for you and me</h3>
        {TrendData.map((trend) => {
          return (
            <div className="trend">
              <span>#{trend.name}</span>
              <span>{trend.share}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TrendCard;
