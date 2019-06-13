import React, { Component } from 'react';

class SearchBar extends Component {

    handleSearchProduct = (event) => {
        this.props.searchProduct(event.target.value)
    }

    render() {
        return (
            <div>
                <input onChange={(event) => this.handleSearchProduct(event)} type="text" className="input search-bar" name="search" placeholder="Search" />
            </div>
        );
    }
}

export default SearchBar;