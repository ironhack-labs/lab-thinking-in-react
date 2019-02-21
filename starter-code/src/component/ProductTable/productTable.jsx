import React, { Component } from "react";
import "./productTable.css";
import ProductRow from "../ProductoRow/productRow";

export default class ProductTable extends Component {
  render() {
    return (
      <div className="productTable">
        <tr>
          <th>
            <span>Name</span> -<span>Price</span>
            {this.props.products.data.map(product => {
              return <ProductRow product={product} />;
            })}
          </th>
        </tr>
      </div>
    );
  }
}
