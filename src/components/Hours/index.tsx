import React, { ReactNode } from "react";
import Select from "../Select";

interface HoursProps {
  children?: ReactNode;
  hour: number;
  onChange: any;
}

const Hours = (props: HoursProps) => {
  return (
    <Select
      from={6}
      to={24}
      selected={props.hour}
      name={"hours"}
      onChanged={props.onChange}
    />
  );
};

export default Hours;
