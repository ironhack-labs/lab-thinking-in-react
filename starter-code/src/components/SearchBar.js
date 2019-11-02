import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      isChecked: false
    };
  }

  changeHandler = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.searchItems(this.state.search);
  };

  checkBoxHandler = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.filterStock(this.state.isChecked);
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
            name="search"
            onChange={this.changeHandler}
          ></input>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">Only show products in stock</label>

            <input
              type="checkbox"
              onChange={this.checkBoxHandler}
              name="isChecked"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
