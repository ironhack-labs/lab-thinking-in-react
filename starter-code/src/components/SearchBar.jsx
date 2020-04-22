import React, { Component } from 'react';

class SearchBar extends Component {

  handleChange = (e) => {
    this.props.filter(e.target.value);
  }

  handleCheck = () => {
    this.props.check();
  }

  render() {
    return (
      <div>
        <p>Search</p>
        <input placeholder={'Search here...'} onChange={this.handleChange} className='search-bar' type="text"/>
        <div className='stock-option'>
          <input onChange={this.handleCheck} className='stock-option-check' type="checkbox" name="checkbox" /><p className='stock-option-description'>Only show products on stock</p>
        </div>
      </div>
    );
  }
}

export default SearchBar;