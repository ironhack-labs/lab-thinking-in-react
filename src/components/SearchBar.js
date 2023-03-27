import React, { useState } from 'react';

function SearchBar({ onChangeSearch, onChangeCheck }) {
  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    setSearch((prevSearch) => event.target.value);
    onChangeSearch(event.target.value);
  };

  const [check, setCheck] = useState(false)
  const handleCheck = (event) => {
    setCheck((prevCheck) => event.target.checked)
    onChangeCheck(event.target.checked)
  }

  return (
    <>
      <div className="d-flex flex-column m-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
          className="mb-3"
        />
        <div className="input-group d-flex justify-content-center">
          <input type="checkbox" id="ProductsInStock" value={check} onChange={handleCheck}/>
          <label className="checkbox-inline ms-2" htmlFor='ProductsInStock'>
            Only show products in stock
          </label>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
