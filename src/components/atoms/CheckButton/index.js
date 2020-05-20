import React from 'react';

const CheckButton = ({ onChange }) => {
  return (
    <div className="checkButton--container">
      <input type="checkbox" name="checkbutton" onChange={onChange}/>
      <h2>Only show products on stock</h2>
    </div>
  );
};

export default CheckButton;
