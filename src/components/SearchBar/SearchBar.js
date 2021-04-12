import React from 'react';

const SearchBar = (props) => {
    return(
        <div>
        <input type="text" value={props.value} onChange={e => props.onChange(e.currentTarget.value)}></input>
        </div>
    )
}

export default SearchBar