import React, { Component } from 'react'

export class SearchBar extends Component {

    render() {
        const {onSearchValue, searchValue} = this.props;
        
        return (
            <div>
                <label htmlFor="searchValue">Search</label>
                <input 
                    onChange={(event) => onSearchValue(event.target.value)}
                    value={searchValue}
                    name="searchValue" 
                    id="searchValue" 
                    type="text" 
                    placeholder="search..."
                />

                <label htmlFor="stock">Only show products in stock</label>
                <input id="stock" type="checkbox"/>
            </div>
        )
    }
}

export default SearchBar
