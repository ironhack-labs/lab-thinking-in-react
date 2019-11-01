import React, { Component } from 'react';

class SearchBar extends Component {
  sendTextToFilterableProductTable = e => {
    this.props.changeHandler(e.target.value);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.sendTextToFilterableProductTable} />
      </div>
    );
  }
}

export default SearchBar;
