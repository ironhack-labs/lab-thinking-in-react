import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class SearchBar extends Component {
  changeHandler = e => {
    this.props.searchItems(e.target.value);
  };

  checkBoxHandler = e => {
    this.props.filterStock(e.target.value);
  };

  render() {
    return (
      <div>
        <div>
          <label className="label">Search</label>
          <input
            className="input is-rounded"
            type="text"
            placeholder="Rounded input"
            onChange={this.changeHandler}
          ></input>
        </div>
        <div className="field">
          <div className="App control">
            <input type="checkbox" onChange={this.checkBoxHandler} />
            <label className="checkbox">Only show products in stock</label>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
