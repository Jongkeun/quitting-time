import React, { ReactNode } from "react";
import Select from "../Select";

interface MinutesProps {
  children?: ReactNode;
  minute: number;
  onChange: any;
}

const Minutes = (props: MinutesProps) => {
  return (
    <Select
      from={0}
      to={60}
      selected={props.minute}
      name={"minutes"}
      onChanged={props.onChange}
    />
  );
};

export default Minutes;
