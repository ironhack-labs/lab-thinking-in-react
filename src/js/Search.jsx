import React, { Component } from 'react'

const Search = props => {
    return (
<form className="search" onSubmit={props.searchItems}>
            <input
                className="input"
                value={props.search.name}
                onChange={event => props.handleSearchChange('name', event.target.value)}
                type="text"
                placeholder="name"
            />
            <br/>
            <input type="checkbox" name="stocked" id="stockedbox"
            /><label> Show Only In Stock</label>
            <br/>
            <input type="submit" className="button is-primary" value="Search" />
        </form>
    )
}

export default Search