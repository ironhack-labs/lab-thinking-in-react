import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <label name="search">
          Search <br></br>
          <br></br>
          <input
            className="input"
            type="text"
            value={this.props.data}
            onChange={this.props.filter}
          />
        </label>

        <label>
          <input type="checkbox" onChange={this.props.onlyStocked} />
          <br></br>
          <br></br>Only show products on stock
        </label>
      </div>
    );
  }
}

export default SearchBar;
