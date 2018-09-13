import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this._handleSearchTextChange = this._handleSearchTextChange.bind(this);
        this._handleInStockChange = this._handleInStockChange.bind(this);
    }

    render() {
        const searchText = this.props.searchText;
        const checked = this.props.checked;

        return (
            <form className="search-wrapper">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={this._handleSearchTextChange}
                />
                <p>
                    <input type="checkbox" checked={checked} onChange={this._handleInStockChange} /> Show
                    only products in stock
                </p>
            </form>
        );
    }

    _handleSearchTextChange(event) {
        this.props.onSearchTextChange(event.target.value);
    }

    _handleInStockChange(event) {
        this.props.onInStockChange(event.target.checked);
    }
}

export default SearchBar;
