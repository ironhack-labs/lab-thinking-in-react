import React, { Component } from 'react'

const Search = props => {
    return (
<form className="search" onSubmit={props.searchPokemon}>
            <input
                className="input"
                value={props.search.name}
                onChange={event => props.handleSearchChange('name', event.target.value)}
                type="text"
                placeholder="name"
            />
            <input type="submit" className="button is-primary" value="Search" />
        </form>
    )
}

export default Search