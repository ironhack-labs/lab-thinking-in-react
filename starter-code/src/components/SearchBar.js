import React, { Component } from 'react';

class SearchBar extends Component {
  searchChange = (event) => {
    this.props.triggerSearch(event.target.value);
  };

  checkedChange = (event) => {
  this.props.triggerChecked(event.target.checked)
  }

  render() {
    return (
      <>
        <form>
          <div className="search">
            <label htmlFor="search">Search</label>
            <input
              type="text"
              value={this.props.search}
              name="search"
              id="search"
              onChange={this.searchChange}
              className="search-text"
            />
            <div>
              <input type="checkbox" name="stocked" id="stocked" checked={this.props.checked} onChange={this.checkedChange}/>
              <label htmlFor="stocked">Only Show products on stock</label>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default SearchBar;
