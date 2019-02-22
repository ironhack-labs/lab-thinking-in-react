import React, { Component } from "react";
import "./ProductTable.css";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    const { productData, search } = this.props;
    const filterResults = productData.filter(oneProduct => {
      return oneProduct.name.indexOf(search) > -1;
    });

    console.log("hey there", filterResults);

    return (
      <div className="ProductTable">
        <table class="table table-striped">
          <tr>
            <th>Name:</th>
            <th>Price:</th>
          </tr>
          {filterResults.map(oneItem => {
            return <ProductRow oneProduct={oneItem} />;
          })}
        </table>
      </div>
    );
  }
}

export default ProductTable;
