import React from 'react';

class SearchBar extends React.Component {
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // console.log('SearchBar -> handleChange', name, value);
    this.props.setQueryChild(name, value);
  };
  render() {
    return (
      <div className="SearchBar">
        <label htmlFor="q">Search</label>
        <input
          type="text"
          placeholder="enter search"
          name="q"
          className="searchText"
          value={this.props.qq}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="checkbox"
          name="stockonly"
          id="stockonly"
          checked={this.props.stockonly}
          onChange={this.handleChange}
        />
        <label htmlFor="stockonly">Only show products on stock</label>
      </div>
    );
  }
}

export default SearchBar;
