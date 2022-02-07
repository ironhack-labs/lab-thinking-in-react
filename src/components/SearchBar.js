import React, { useState } from 'react';

function SearchBar({ productData, handleChange, handleCheckBox }) {
  const [checkbox, setCheckbox] = useState(false);

  const handleChangeBox = () => {
    setCheckbox(!checkbox);
    handleCheckBox(checkbox);
  };

  return (
    <div>
      <div>
        <p>Search</p>
        <input onChange={handleChange} type="search" name="" id="" />
        <input
          onChange={handleChangeBox}
          type="checkbox"
          name="inSotck"
          id=""
          checked={checkbox}
        />
        <span>Only show products in stock</span>
      </div>

      <div></div>
    </div>
  );
}

export default SearchBar;
