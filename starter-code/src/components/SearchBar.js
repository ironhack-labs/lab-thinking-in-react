import React, { Fragment } from 'react';

const SearchBar = (props) => {
    return (
        <Fragment>
            <p>Search</p>
            <input name="queryString" type="text" value={props.queryString} onChange={e => props.inputHandler(e)} />
            <input type="checkbox" name="onStock" checked={props.onStock} onChange={e => props.inputHandler(e)} />
            <label>Only show products on stock</label>
        </Fragment>
    )
}

export default SearchBar;