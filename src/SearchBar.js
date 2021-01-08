import React from 'react';

const SearchBar = (props) => {
    return <input type="text" value={props.value} placeholder="Search products..."></input>
}

export default SearchBar;