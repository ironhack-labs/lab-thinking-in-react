import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <input type="text" value={props.value} onChange={event => props.onChange(event.currentTarget.value)} placeholder="Search products..."></input>
        </div>
    )
}

export default SearchBar;