import React from 'react';

const Checkbox = props => {
  console.log("props.checkbox: ", props.status)
  return (
    <div>
      <input type="checkbox"
        onChange={props.checkboxChange}
        status={props.checkbox} />
      <label>Only show products in stock</label>
    </div>
  );
};

export default Checkbox;