import React, { useState } from 'react';
import './SearchBar.css';

const Searchbar = (props) => {

  const [checked, setChecked] = useState(false);

  return (
    <div id="search">
      <input placeholder='Search' onChange={(e) => props.setFilter({ name: e.target.value })} id="searchInput"></input>
      <p>
        <input name="checkbox" onChange={(e) => { setChecked(!checked); props.setFilter({ stock: !checked }) }} type={'checkbox'}></input>
        <label for="checkbox">Only show products in stock</label>
      </p>
    </div>
  );
};

export default Searchbar;
