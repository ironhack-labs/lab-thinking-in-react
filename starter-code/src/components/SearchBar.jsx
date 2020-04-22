import React, { Component } from 'react';

class SearchBar extends Component {

  handleChange = (e) => {
    this.props.filter(e.target.value);
  }

  render() {
    return (
      <div>
        <p>Search</p>
        <input onChange={this.handleChange} className='search-bar' type="text"/>
        <div className='stock-option'>
          <input className='stock-option-check' type="checkbox" name="" id=""/><p className='stock-option-description'>Only show products on stock</p>
        </div>
      </div>
    );
  }
}

export default SearchBar;