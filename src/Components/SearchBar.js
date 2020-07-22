import React from 'react';

const SearchBar = ({ getKeyword, getStock }) => {
  return (
    <div id="filters">
      <div>
        <label className="hidden" htmlFor="search">
          Search
        </label>
        <input
          id="search"
          onChange={getKeyword}
          type="text"
          placeholder="Search for products or categories"
        />
      </div>

      <div class="row">
        <div class="toggle-button-cover">
          <div class="button b2" id="button-16">
          <div id="allProducts"></div>
          <div id="outOfStock"></div>
            <input id="checkbox" type="checkbox" name="stocked" onClick={getStock} />
            <div class="knobs"></div>
            
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
