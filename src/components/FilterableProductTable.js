import React from 'react';

import { Component } from 'react';
class FilterableProducTable extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>IronStore</h1>
        <ul>
          <li>
            {this.props.products.map((product) => (
              <p>{product.category}</p>
            ))}
          </li>
        </ul>
      </>
    );
  }
}
export default FilterableProducTable;
