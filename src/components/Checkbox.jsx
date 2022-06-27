import React from 'react';

const Checkbox = ({ stock, setStock }) => {
  return (
    <>
      <input
        type="checkbox"
        value={stock}
        onChange={(e) => {
          console.log('value in checkbox is ', e.target.value);
          setStock(stock === '' ? 'on' : '');
        }}
      />
      <label>Only show products in stock</label>
    </>
  );
};

export default Checkbox;
