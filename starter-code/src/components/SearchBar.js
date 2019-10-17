import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    // console.log(this.props)
    return (
      <>
        <h3>Search</h3>
        <input className="input" type="text" name="search" value={this.props.searchValue} onChange={e => this.props.handleSearch(e)}/>
        <input type="checkbox" name="showProducts" checked={this.props.showProducts} onChange={e => this.props.handleChange(e)} />  Only show products on stock
      </>
    );
  }
}
export default SearchBar;
