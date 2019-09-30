import React from "react";

const Select = (props: any) => {
  const arr: Array<number> = [];
  for (let i = props.from; i <= props.to; i++) {
    arr.push(i);
  }

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
