import React from 'react';

const SearchBar = (props) => {
    return (
      <div>
        <input 
        type='text'
        className="input search-bar"
        name="search" 
        placeholder='Search'
        defaultValue=""
        onChange={props.handleChange}
        onKeyDown={props.handleDelete}
      />
      </div>
    );
}

export default SearchBar;