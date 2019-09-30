import React, { useState } from "react";
import Select from "../Select";

const Minutes: React.FC = () => {
  const [minute, setMinutes] = useState(0);

  const onChanged = (event: any) => {
    setMinutes(event.target.value);
  };

  return (
    <Select
      from={0}
      to={60}
      selected={minute}
      name={"minutes"}
      onChanged={onChanged}
    />
  );
};

export default Minutes;
