import React from "react";
import Update from "../Updates/update";
import Feedback from "../Updates/feedback";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Feedback</h3>
        <Feedback />
      </div>
      <div>
      <h3>Job Updates</h3>
        <Update />
      </div>
    </div>
  );
};

export default RightSide;
