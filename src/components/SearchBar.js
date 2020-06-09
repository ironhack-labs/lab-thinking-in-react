import React from 'react';

const SearchBar = ({ searchfield, searchChange }) => {
  return (
    <div className='tl ma2 pa2'>
        <h4>Search</h4>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search product'
        onChange= {searchChange}
      />
    </div>
  );
}

export default SearchBar;