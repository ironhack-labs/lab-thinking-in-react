import React from 'react';

const CheckButton = () => {
  return (
    <div className="checkButton--container">
      <input type="checkbox" name="checkbutton" />
      <h2>Only show products on stock</h2>
    </div>
  );
};

export default CheckButton;
