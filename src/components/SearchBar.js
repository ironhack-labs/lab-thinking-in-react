import React, { Component } from 'react';

export default class SearchBar extends Component {

  state ={
    search : "",
    // filter: true
  }
 
  handleChange =(event)=>{
    // console.log(event.target.value);

    let value = event.target.value;
    // const key = event.target.name;
    
    this.setState({search:value})
   this.props.handleSearch(value)
  }

  handleCheck = (evt) => {
    let value = evt.target.checked
    this.props.handleCheckBox(
      value
    )

    // if (evt.target.checked === true) {
    //   console.log(evt)
    // } else {
    //   console.log('toto')
    // }
  }

  render() {
    return (
      <div className="search-bar">
        <label htmlFor="search">Search</label>
        <input checked={this.handleChange} id="search" name="search" type="text" />
        <div className="checkbox-product">
          <input type="checkbox"  onClick={this.handleCheck}/>
          <label name="stock" htmlFor="productsStock">
            Only show products on stock
          </label>
        </div>
      </div>
    );
  }
}
