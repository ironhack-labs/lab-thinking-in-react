import React from 'react';

class SearchBar extends React.Component {
  handleChange = (event) => {
    console.log('SearchBar -> handleChange', event.target.value);
    this.props.setQueryChild(event.target.value);
  };
  render() {
    return (
      <div className="SearchBar">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          placeholder="enter search"
          name="search"
          className="searchText"
          value={this.props.qq}
          onChange={this.handleChange}
        />
        <br />
        <input type="checkbox" name="instockonly" id="instockonly" />
        <label htmlFor="instockonly">Only show products on stock</label>
      </div>
    );
  }
}

export default SearchBar;
