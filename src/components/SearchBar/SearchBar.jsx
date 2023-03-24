import React, { useState } from 'react'

function SearchBar({ onInputChange }) {

  const [inputValue, setInputValue] = useState("");

  const handleSearch = (event) => {
    setInputValue(event.target.value);
    onInputChange(inputValue);
  }

  return (
    <div>
      <form>
        <div className="input-group filters">
          <span className="input-group-text"></span>
          <input type="text" className="form-control description-input" onChange={handleSearch} value={inputValue} id="search" name="search"
            placeholder="Search" ></input>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="stock" value="stock" />
          <label className="form-check-label" htmlFor='stock'>Only show products in stock</label>
        </div>
      </form>
    </div>
  )
};

SearchBar.defaultValue = {
  onInputChange: () => {}
}

export default SearchBar;

