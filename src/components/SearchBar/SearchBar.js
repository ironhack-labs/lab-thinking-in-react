import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    searchValue: "",
    inStock: false
  }

  handleChange = (e) => {
    const { value, type, checked, name } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    this.setState({
      ...this.state,
      [name]: newValue
    }, () => this.props.filterProductsBySearch(this.state)) // RECORDAR
   
  }

  render() {
    return (
      <form>
        <label>
          Search <input type="search" name="searchValue" value={this.state.searchValue} onChange={(e) => this.handleChange(e)} />
        </label>
        <label>
          <input type="checkbox" name="inStock" onChange={(e) => this.handleChange(e)} /> Only show products on stock
        </label>
        
      </form>
    )
  }
}
