import React, { Component } from 'react';

class SearchBar extends Component {
    render({inputChange, checkboxChange} = this.props) {
        return (
            <div>
                <h3>Search</h3>
                <input type="text" onChange={inputChange}></input>
                <input type="checkbox" onChange={checkboxChange}></input><span>Only show products on stock</span>
            </div>
        );
    }
}

export default SearchBar;