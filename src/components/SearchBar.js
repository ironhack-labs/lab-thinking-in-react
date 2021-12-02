import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
  const { checked, setChecked } = props;

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(evt) => props.search(evt.target.value)}
      />
      <div>
        <label>Only show products on stock</label>
        <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
