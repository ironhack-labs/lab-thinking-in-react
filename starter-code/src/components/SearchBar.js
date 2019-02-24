import React, { Component } from 'react';

class Searchbar extends Component {
  

  render() {
    return (
      <div className="Searchbar">
        <input type="text" name="query" placeholder="Search" onChange={e => this.props.handleSearch(e)}/>
        <br />
        <input type="checkbox" onChange={e => this.props.handleCheckbox(e)}/>Only show products in stock
      </div>
    );
  }
}

export default Searchbar;