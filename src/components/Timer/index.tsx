import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Timer = (props: any) => {
  console.log(props.location.state);
  const states = props.location.state;
  const [hour, setHours] = useState(states.Hour);
  const [minute, setMinutes] = useState(states.Minute);
  const [second, setSeconds] = useState(states.Second);
  const [timeString, setTimeString] = useState("");
  const t = new Date();
  t.setHours(states.Hour);
  t.setMinutes(states.Minute);
  t.setSeconds(states.Second);
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
  // storage.get().then((data: any) => {
  //   if (data.Hour) setHours(parseInt(data.Hour));
  //   if (data.Minute) setMinutes(parseInt(data.Minute));
  //   if (data.Second) setSeconds(parseInt(data.Second));

  return (
    <div>
      <br />
      <label>{`${timeString}`}</label>
      <br />
      <Link to="/">Go to setting page</Link>
    </div>
  );
};

export default Timer;
