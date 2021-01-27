import React, { Component } from 'react'

export default class SearchBar extends Component {

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.props.onSearchInputChange({
      [name]: value
    });
  }

  render() {
    return (
      <div className="search">
        <h3>Search</h3>
        <input onChange={this.handleInputChange} type="text" name="searchInput" value={this.props.searchInput} />
        <label>
          <input 
            name="ifShowOnlyOnStock"
            type="checkbox"
            checked={this.props.ifShowOnlyOnStock}
            onChange={this.handleInputChange} />
            Only show products on stock
        </label> 
      </div>   
    )
  }
}

