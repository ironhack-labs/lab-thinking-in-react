import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <input type="text" name="query" placeholder="Search product" onChange={e => this.props.handleSearch(e)} />
                <br />
                <input type="checkbox" onChange={e => this.props.handleCheckBox(e)} /> In stock only
            </div>
        );
    }
}

export default SearchBar;