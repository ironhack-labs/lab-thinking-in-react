import React, { useState } from 'react';

export default function SearchBar(props) {
  //   const [] = useState();
  const handleChange = (e) => {
    props.setQuery(e.target.value);
  };

  const handleCheckbox = (event) => {
    props.setInStock(event.target.checked);
  };

  return (
    <>
      <h2>SEARCH</h2>
      {/* this is an example how to call setState directly in onChange */}
      <input
        type="text"
        value={props.query}
        placeholder="Search By Name"
        name="input"
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="">Only Show Products in Stock</label>
      <input
        type="checkbox"
        name="onStock"
        checked={props.inStock}
        onChange={handleCheckbox}
      />

      <div>filtered</div>
    </>
  );
}
