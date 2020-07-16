import React, { Component } from 'react';
import ProductTable from './ProductTable/ProductTable';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      name: '',
      price: '',
      stocked: '',
    };
  }

  render() {
    return (
      <div>
        <ProductTable Products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
