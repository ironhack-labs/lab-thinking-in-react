import React from 'react';
import '../App.css';

const SearchBar = (props) => {
  const { search, stocked, changeState } = props;

  const handleInput = (e) => {
    const { target } = e;
    const { id } = target;
    const value = id === 'search' ? target.value : target.checked;
    changeState({ id, value });
  };

  return (
    <div className='search-bar'>
        <label id='search-box-label' htmlFor='search-box'>Search</label>
        <input type='text' id='search' value={search} onChange={handleInput} />
        <div>
          <input type='checkbox' id='stocked' checked={stocked} onChange={handleInput} />
          <label htmlFor='checkbox'>Only show products in stock</label>
        </div>
    </div>
  );
}

export default SearchBar;
