import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchQuery: '',
    inStock: true,
  };

  handleChange = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setQueryProp(this.state.searchQuery);
  };

  handleChangeStock = (e) => {
    console.log(e.target.value);
    this.setState({
      inStock: !this.state.inStock,
    });
    this.props.setInStockProps(this.state.inStock);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="query"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <button type="submit"> Search</button>
          <div className="stock">
            <label htmlFor="inStock">Only show products on stock</label>
            <input
              name="inStock"
              id="stock"
              type="checkbox"
              onClick={this.handleChangeStock}
              defaultUnchecked
            />
          </div>
        </form>
      </div>
    );
  }
}
