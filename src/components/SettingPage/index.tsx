import React, { useState, useEffect } from "react";
import Hours from "../Hours";
import Minutes from "../Minutes";
import Seconds from "../Seconds";
import storage from "../../IO/storage";
import { Link } from "react-router-dom";

const SettingPage = (props: any) => {
  const [hour, setHours] = useState(18);
  const [minute, setMinutes] = useState(0);
  const [second, setSeconds] = useState(0);

  useEffect(() => {
    storage.get().then((data: any) => {
      if (data.Hour) setHours(parseInt(data.Hour));
      if (data.Minute) setMinutes(parseInt(data.Minute));
      if (data.Second) setSeconds(parseInt(data.Second));
    });
  }, []);
  const onClick = () => {
    storage.set({ isSet: true }).then(() => {
      props.history.push({
        pathname: "/timer",
      });
    });
  };
  const valueChanged = (event: any) => {
    const name: string = event.target.className;
    if (name === "hours") {
      setHours(event.target.value);
      storage.set({ Hour: parseInt(event.target.value) });
    } else if (name === "minutes") {
      setMinutes(event.target.value);
      storage.set({ Minute: parseInt(event.target.value) });
    } else if (name === "seconds") {
      setSeconds(event.target.value);
      storage.set({ Second: parseInt(event.target.value) });
    }
  };
  return (
    <div>
      <label>Quit Time</label>
      <br />
      <Hours hour={hour} onChange={valueChanged} />
      <Minutes minute={minute} onChange={valueChanged} />
      <Seconds second={second} onChange={valueChanged} />
      <a onClick={onClick}>Set</a>
    </div>
  );
};

export default SettingPage;
