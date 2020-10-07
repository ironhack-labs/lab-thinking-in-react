import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    searchbar: '',
    inStock: false,
  };

  handleChange = (e) => {
    const { name } = e.target;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({ [name]: value }, () =>
      this.props.searchProduct(this.state)
    );
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="searchbar"
            onChange={this.handleChange}
            value={this.state.searchbar}
          />
          <div>
            <input
              type="checkbox"
              name="inStock"
              onChange={this.handleChange}
              checked={this.state.inStock}
            />
            <label>Only show products on stock</label>
          </div>
        </form>
      </div>
    );
  }
}
