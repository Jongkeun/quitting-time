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
  useEffect(() => {
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      setTimeString(hours + "h " + minutes + "m " + seconds + "s ");

      //   // If the count down is finished, write some text
      //   if (distance < 0) {
      //     clearInterval(x);
      //     document.getElementById("demo").innerHTML = "EXPIRED";
      //   }
    }, 100);

    return function cleanup() {
      clearInterval(x);
    };
  });

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
