import React from 'react';

const SearchBar = ({handleQuery, query, stock, handleStock}) => {
  return (
    <div>
      <div>
        <input type="text" value={query} onChange={handleQuery}/>
      </div>
      <div>
        <input type="checkbox" name="stocked" checked={stock} onChange={handleStock} />
        <label htmlFor="stocked"> Only show products in stock</label>
      </div>
    </div>
  );
};

export default SearchBar;
