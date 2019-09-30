import React, { useState } from "react";
import Select from "../Select";

const Seconds: React.FC = () => {
  const [second, setSeconds] = useState(0);

  const onChanged = (event: any) => {
    setSeconds(event.target.value);
  };

  return (
    <Select
      from={0}
      to={60}
      selected={second}
      name={"seconds"}
      onChanged={onChanged}
    />
  );
};

export default Seconds;
