import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form action="">
        <label htmlFor="searchProduct">Search</label>
        <input type="text" id="searchProduct" value={this.props.myValue} onChange={(e) => this.props.updateValue(e)}/>
        <br></br> <input type="checkbox" onChange={() => this.props.showStock()} /> Only show product on stock
      </form>
    );
  }
}
