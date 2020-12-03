import React, { Component } from 'react';

export default class SearchBar extends Component {
  //this listens to the events/changes
  handleChange = (event) => {
    console.log(event.target.value);
    this.props.search(event.target.value);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form>
          <label htmlFor="search">Search </label>
          <input 
            type="text" 
            name="search" 
            onChange={this.handleChange} 
          />
          <br></br>
        <label htmlFor="inStock">only products in stock</label>
        <input
          type="checkbox"
          name="inStock"
          onChange={this.inStockProducts}
        />

        </form>

      </div>
    );
  }
}
