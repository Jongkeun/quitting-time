import React, { ReactNode } from "react";
import Select from "../Select";

interface MinutesProps {
  children?: ReactNode;
  second: number;
  onChange: any;
}

const Seconds = (props: MinutesProps) => {
  return (
    <Select
      from={0}
      to={60}
      selected={props.second}
      name={"seconds"}
      onChanged={props.onChange}
    />
  );
};

export default Seconds;
