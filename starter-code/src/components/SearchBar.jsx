import React, { Component } from 'react';



class SearchBar extends Component {

  state = {
    search: "",
  }

  handleInput = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }, 
      this.props.filterProducts(e.target.value)
    );
  };

  render() {
    return (
      <input type="search" name="search" value={this.state.search} onChange={this.handleInput} />
    );
  }
}


export default SearchBar;