import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleSearch = (event) => {
        this.props.searchHandler(event.target.value);
    }

    handleCheckbox = (event) => {
        this.props.stockedHandler(event.target.checked);
    }

    render() {
        return (
            <div className="SearchBar">
                <div>Search</div>
                <input name="searchValue" type="text" onChange={this.handleSearch}></input>
                <div><input name="showJustStocked" type="checkbox" onChange={this.handleCheckbox} /> Only show products on stock</div>
            </div>
        )
    }
}
