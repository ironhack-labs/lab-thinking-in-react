import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    name: '',
    showOnlyInStock: false,
  };

  handleChange = (event) => {
    let { type, name, value, checked } = event.target;

    if (type === 'checkbox') {
      value = checked;
    }

    this.setState({ [name]: value }, () => {
      const { filterProducts } = this.props;
      filterProducts(this.state);
    });
  };
  render() {
    return (
      <div>
        <div>
          <label htmlFor="name">Search</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Type product name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="showOnlyInStock"
            id="showOnlyInStock"
            checked={this.state.showOnlyInStock}
            onChange={this.handleChange}
          />
          <label htmlFor="showOnlyInStock">Only show products on stock.</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
