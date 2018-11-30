import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <section className="SearchBar">
      <input value={this.props.search}
      onChange={event =>this.props.onSearchChange(event)}
      name="search" type="text"
      placeholder="SearchBar..." />

      <input type="checkbox"/>Only show products in stock
      </section>
     );
  }
}
 
export default SearchBar;