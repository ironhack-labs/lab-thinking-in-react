import React from 'react';

function CheckBox({ setShow }) {
    
  const handleChange = ({ target }) => {
    if (target.checked) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div>
      <input type="checkbox" id="stock" name="stock" onChange={handleChange} />
      <label for="vehicle1"> Only show products on stock</label>
    </div>
  );
}

export default CheckBox;
