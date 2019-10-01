import React, { ReactNode } from "react";

interface SelectProps {
  children?: ReactNode;
  from: number;
  to: number;
  selected: number;
  name: string;
  onChanged: any;
}

const Select = (props: SelectProps) => {
  const arr: Array<number> = [];
  for (let i = props.from; i <= props.to; i++) {
    arr.push(i);
  }
  console.log("select");
  console.log(props.selected);
  return (
    <select
      className={props.name}
      value={props.selected}
      onChange={props.onChanged}
    >
      {arr.map(element => (
        <option key={`${element}`} value={`${element}`}>
          {element}
        </option>
      ))}
    </select>
  );
};
export default Select;
