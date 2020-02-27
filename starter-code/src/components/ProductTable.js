import React, { Component } from 'react';
import ProductRow from './ProductRow';
import data from '../../src/data.json';

class ProductTable extends Component {
  constructor() {
    super();

    this.state = {
      data: data.data,
      searchBar: ''
    };
  }

  handleChange = e => {
    this.setState({ searchBar: e.target.value });
  };

  render() {
    const productFilter = this.state.data.filter(elm =>
      elm.name.toLowerCase().includes(this.state.searchBar.toLowerCase())
    );

    return (
      <div className="maximus">
        <h1>Search</h1>
        <input
          type="text"
          className="input-search-bar"
          name="searchBar"
          value={this.state.searchBar}
          onChange={this.handleChange}
        />
        {/* <checkbox></checkbox> */}

        <div className="centerTable">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            {productFilter.map((elm, idx) => (
              <ProductRow key={idx} {...elm} />
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default ProductTable;
