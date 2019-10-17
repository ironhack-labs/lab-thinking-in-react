import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {

  render() {
    return (
      <table className="table is-striped is-fullwidth">
        <tr>
          <th className="has-text-centered">Name</th>
          <th className="has-text-centered">Price</th>
        </tr>
        {this.props.productList.map((elem,idx) => <ProductRow key={idx} product = {elem}/>)}
      </table>
    );
  }
}
export default ProductTable;
