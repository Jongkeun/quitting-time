import React, { useEffect, useState } from "react";
import storage from "../../IO/storage";

const Timer = (props: any) => {
  const [hour, setHours] = useState(18);
  const [minute, setMinutes] = useState(0);
  const [second, setSeconds] = useState(0);
  const [timeString, setTimeString] = useState("");

  storage.get().then((data: any) => {
    if (data.Hour) setHours(parseInt(data.Hour));
    if (data.Minute) setMinutes(parseInt(data.Minute));
    if (data.Second) setSeconds(parseInt(data.Second));
  });

  const t = new Date();
  t.setHours(hour);
  t.setMinutes(minute);
  t.setSeconds(second);
  const countDownDate = t.getTime();

  // DidMount
  useEffect(() => {
    calculateTime();
  }, []);

  // update
  useEffect(() => {
    var x = setInterval(calculateTime, 500);

    return function cleanup() {
      clearInterval(x);
    };
  });

  const calculateTime = () => {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimeString(hours + "h " + minutes + "m " + seconds + "s ");
  };

  const onClick = () => {
    props.history.push({
      pathname: "/",
    });
  };
  return (
    <div>
      <a onClick={onClick}>Setting</a>
      <label>{`${timeString}`}</label>
      <br />
    </div>
  );
};

export default Timer;
