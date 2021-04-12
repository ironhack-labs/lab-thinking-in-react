import React from 'react';

const SearchBar = (props) => {
    return(
        <input type="text" value={props.value}></input>
    )
}

export default SearchBar