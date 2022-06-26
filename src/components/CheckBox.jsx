import React from 'react';

const Checkbox = ({ stock, setStock }) => {
  return (
    <>
      <input
        type="checkbox"
        value={!stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <label>Only show products in stock</label>
    </>
  );
};

export default Checkbox;