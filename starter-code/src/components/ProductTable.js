import React, { Component } from "react";
import "./ProductTable.css";

import ProductRow from "./ProductRow.js";

class ProductTable extends Component {
  state = {};
  render() {
    console.log(this.props.products);
    return (
      <div className="ProductTable">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.data.map((oneProduct, index) => {
              if (
                this.props.searchString === "" ||
                oneProduct.name
                  .toLowerCase()
                  .includes(this.props.searchString.toLowerCase())
              ) {
                if (!this.props.checked) {
                  return (
                    <ProductRow
                      key={index}
                      name={oneProduct.name}
                      price={oneProduct.price}
                      stocked={oneProduct.stocked}
                    />
                  );
                } else {
                  if (oneProduct.stocked) {
                    return (
                      <ProductRow
                        key={index}
                        name={oneProduct.name}
                        price={oneProduct.price}
                        stocked={oneProduct.stocked}
                      />
                    );
                  }
                }
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
