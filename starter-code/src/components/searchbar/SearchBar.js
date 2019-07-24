import React, { Component } from 'react';
import './searchbar.css';

class SearchBar extends Component {

  showStockedProducts() {

  }

  render() {
    return (
      <div className="container search-bar">
        <legend className="is-size-5">Search</legend>
        <input className="input" onChange={this.props.search} value={this.props.value}/>
        <input type="checkbox" onChange={this.props.updateCheck} />
        <label className="is-size-5"> Only show products in stock</label>
      </div>
    );
  }
}

export default SearchBar;