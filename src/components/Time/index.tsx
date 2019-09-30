import React from "react";
import Hours from "../Hours";
import Minutes from "../Minutes";
import Seconds from "../Seconds";

const Time: React.FC = () => {
  return (
    <div>
      <Hours />
      <Minutes />
      <Seconds />
    </div>
  );
};

export default Time;
