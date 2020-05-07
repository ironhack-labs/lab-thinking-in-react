import React, { Component } from 'react';
import ProductRow from '../product/ProductRow';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.products
    };
  }
    

  render() {
    return (
      <>
        <div className="row justify-content-between">
          <div>Name</div>
          <div>Price</div>
        </div>
        {this.props.products.map((elm, idx) => (
          <ProductRow key={idx} {...elm} />
        ))}
      </>
    );
  }
}

export default FilterableProductTable;
