import React, { Component } from 'react';

class SearchBar extends Component {
  

  handleChange = (e) => {
    this.props.onQueryChange(e.target.value);
    console.log(e.target.value, this.props);
  }

  render() {
    const { name } = this.props;
    return (
      <form>
        <input onChange={e => this.handleChange(e)} />
        {/* <input type="text" id="search" placeholder='Search...'></input> */}
        <p>
        <input type="checkbox" id="stock" />
        {' '} Only show products in stock
        </p>
      </form>
    )
  }
}

export default SearchBar;
