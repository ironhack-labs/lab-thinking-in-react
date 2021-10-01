import React from 'react';

const SearchBar = (props) => {

    const changeHandler = (event) => {
        props.searchProducts(event.target.value)
    }

    return (
        <div>
            <input type="text" name="searchInput" placeholder="Search" onChange={changeHandler} />
        </div>
    );
}

export default SearchBar;