import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-box">
        <p>Search</p>
        <input
          className="search-input"
          type="search"
          onChange={this.props.handleSearchInput}
        />
        <form className="checkbox">
          <label>
            <input
              type="checkbox"
            //   checked={}
              onChange={this.props.handleCheckBox}
            />
            Only show products in stock
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
