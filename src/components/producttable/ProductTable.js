import React, { Component } from 'react';
import ProductRow from '../productrow/ProductRow';

export class ProductTable extends Component {
  render() {
    const productList = this.props.products
      .filter((ps) => !this.props.stock || (this.props.stock && ps.stocked))
      .filter((p) =>
        p.name
          .toLocaleLowerCase()
          .includes(this.props.search.toLocaleLowerCase())
      )
      .map((item) => <ProductRow key={item.name} product={item} />);
    return (
      <table className="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productList}</tbody>
      </table>
    );
  }
}

export default ProductTable;
