import React, { useState, useEffect } from "react";
import Hours from "../Hours";
import Minutes from "../Minutes";
import Seconds from "../Seconds";
import storage from "../../IO/storage";

const Time: React.FC = () => {
  const [hour, setHours] = useState(9);
  const [minute, setMinutes] = useState(30);
  const [second, setSeconds] = useState(10);

  useEffect(() => {
    storage.get().then((data: any) => {
      console.log(data);
      if (data.Hour) setHours(parseInt(data.Hour));
      if (data.Miniute) setMinutes(parseInt(data.Miniute));
      if (data.Second) setSeconds(parseInt(data.Second));
    });
  }, []);

  const valueChanged = (event: any) => {
    const name: string = event.target.className;
    if (name === "hours") {
      setHours(event.target.value);
      storage.set({ Hour: parseInt(event.target.value) });
    } else if (name === "minutes") {
      setMinutes(event.target.value);
      storage.set({ Miniute: parseInt(event.target.value) });
    } else if (name === "seconds") {
      setSeconds(event.target.value);
      storage.set({ Second: parseInt(event.target.value) });
    }
  };

  return (
    <div>
      <Hours hour={hour} onChange={valueChanged} />
      <Minutes minute={minute} onChange={valueChanged} />
      <Seconds second={second} onChange={valueChanged} />
    </div>
  );
};

export default Time;
