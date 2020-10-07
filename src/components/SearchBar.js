import React, { Component } from 'react';

export default class SearchBar extends Component {

  state ={
    search : ""
  }
 
  handleChange =(event)=>{
    // console.log(event.target.value);

    let value = event.target.value;
    // const key = event.target.name;
    
    this.setState({search:value})
   this.props.handleSearch(value)

  }

  render() {
    return (
      <div className="search-bar">
        <label htmlFor="search">Search</label>
        <input onChange={this.handleChange} id="search" name="search" type="text" />
        <div className="checkbox-product">
          <input type="checkbox" />
          <label name="stock" htmlFor="productsStock">
            Only show products on stock
          </label>
        </div>
      </div>
    );
  }
}
