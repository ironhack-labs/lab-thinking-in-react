import React from 'react';

const SearchBar = (props) => {
    return(
        <div>
        <h3>Search</h3>
        <input className="input" placeholder="enter searchterm" type="text" name="q" value={props.q} onChange={(e) => props.inputHandler(e)} />
        </div>
    )
}

export default SearchBar;