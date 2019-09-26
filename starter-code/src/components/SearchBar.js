import React, { Component } from 'react';

class SearchBar extends Component {
  handleSearch = event => {
    const value = event.target.value;
    this.props.handleQuerySearch(value);
  };

  handleCheck=(event)=>{
      const checked=event.target.checked
      this.props.handleQueryCheck(checked);
  }

  render() {
      console.log(this.props.checkedState)
    return (
      <div>
        <div>
          <label htmlFor="search">Search</label>
        </div>
        <div>
          <input
            type="text"
            name="search"
            id="search"
            value={this.props.search}
            onChange={this.handleSearch}
          />
        </div>
        <div>
          <input type="checkbox" name="checkbox" id="checkbox" checked={this.props.checkedState} onChange={this.handleCheck}/>
        </div>
        <div>
          <label htmlFor="checkbox">Only show products in stock</label>
        </div>
        </div>
    )
  }
}

export default SearchBar;
