import React, { useState, useEffect } from "react";
import Hours from "../Hours";
import Minutes from "../Minutes";
import Seconds from "../Seconds";
import storage from "../../IO/storage";

const Time: React.FC = (props: any) => {
  const [hour, setHours] = useState(9);
  const [minute, setMinutes] = useState(30);
  const [second, setSeconds] = useState(10);

  useEffect(() => {
    storage.get().then((data: any) => {
      if (data.Hour) setHours(parseInt(data.Hour));
      if (data.Minute) setMinutes(parseInt(data.Minute));
      if (data.Second) setSeconds(parseInt(data.Second));
      if (data.Hour || data.Minute || data.Second) {
        if (props.history)
          props.history.push({
            pathname: "/timer",
            state: {
              Hour: data.Hour ? parseInt(data.Hour) : 18,
              Minute: data.Minute ? parseInt(data.Minute) : 0,
              Second: data.Second ? parseInt(data.Second) : 0,
            },
          });
      }
    });
  }, []);

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
      <Hours hour={hour} onChange={valueChanged} />
      <Minutes minute={minute} onChange={valueChanged} />
      <Seconds second={second} onChange={valueChanged} />
    </div>
  );
};

export default Time;
