import React, { Component } from 'react';

class SearchBar extends Component {
  
  handleChange = (e) => {
    switch (e.target.id) {
      case 'search':
        return this.props.setQuery(e.target.value);
      case 'checkbox':
        return this.props.setCheckBox(e.target.checked);
    }
  }
  render() {
    
    return (
      <div>
        <label htmlFor="search"></label>
        <input onChange={this.handleChange} type="text" name="search" id="search" value={this.props.query} />
        <label htmlFor="checkbox">Only show products in stock</label>
        <input onChange={this.handleChange} type="checkbox" name="checkbox" id="checkbox"/>
      </div>
    )
  }
}


export default SearchBar;