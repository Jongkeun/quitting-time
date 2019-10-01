import React from "react";
import Time from "../Time";
import { Link } from "react-router-dom";

const SettingPage = (props: any) => {
  return (
    <div>
      <label>Quit Time</label>
      <br />
      <Time {...props} />
      <Link to="/timer">Set</Link>
    </div>
  );
};

export default SettingPage;
