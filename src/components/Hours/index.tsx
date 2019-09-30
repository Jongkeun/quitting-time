import React, { useState } from "react";
import Select from "../Select";

const Hours: React.FC = () => {
  const [hour, setHours] = useState(9);

  const onChanged = (event: any) => {
    setHours(event.target.value);
  };

  return (
    <Select
      from={6}
      to={24}
      selected={hour}
      name={"hours"}
      onChanged={onChanged}
    />
  );
};

export default Hours;
