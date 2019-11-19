import React from 'react';

const CheckBox = ({ toggleInStock }) => (
  <div>
    <input type="checkbox" onChange={toggleInStock} /> Only show products
    instock!
  </div>
);

export default CheckBox;
