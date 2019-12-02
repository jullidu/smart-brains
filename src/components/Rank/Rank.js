import React from "react";
import "./rank.css";

const Rank = ({ name, entries }) => {
  return (
    <div className="rank-box">
      <div className="rank-title">{`${name}, your current entry count is..`}</div>
      <div className="rank-desc">{entries}</div>
    </div>
  );
};

export default Rank;
