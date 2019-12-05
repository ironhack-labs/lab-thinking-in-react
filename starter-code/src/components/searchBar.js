import React, { Component } from 'react';

class searchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      stock: false
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    if (name === 'stock') value = e.target.checked
    this.setState({ [name]: value }, () => this.props.searchItem(this.state.search, this.state.stock));
  };

  render() {
    return (
      <div>
        <input
          value={this.state.search}
          name="search"
          onChange={this.handleChange}
          className="input"
          type="text"
          placeholder="Search Product"
        />
        <label>
          <input
            checked={this.state.stock}
            name="stock"
            onChange={this.handleChange}
            className="input"
            type="checkbox"
          />
        </label>
      </div>
    );
  }
}

export default searchBar;
