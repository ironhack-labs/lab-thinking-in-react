import React, { Component } from "react";
import ProductRow from "./ProductRow.js";

class ProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          {this.props.products.data
            .filter(product => product.name.includes(this.props.searchedText))
            .map(product => {
              if (this.props.filterCheck) {
                if (product.stocked) {
                  return <ProductRow myProduct={product} />;
                }
              } else {
                return <ProductRow myProduct={product} />;
              }
            })}
        </table>
      </div>
    );
  }
}

export default ProductTable;
