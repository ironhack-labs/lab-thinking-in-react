import React, { Component } from "react";
import ProductRow from "../productTable/productRow/ProductRow";

class ProductTable extends Component {
  render() {
       const productsArr = this.props.productsProps.map((product, idx) => {
      return <ProductRow product={product} key={idx} />;
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{productsArr}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
