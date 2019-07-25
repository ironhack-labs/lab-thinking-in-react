import React, { Component } from "react";
import ProductRow from "./ProductRow";
import "../App.css";

class ProductTable extends Component {
  showProductRow = () => {
    return this.props.products2.map((product, i) => {
      //   console.log("-=-=test=-", product);
      return <ProductRow key={i} name={product.name} price={product.price} />;
    });
  };

  render() {
    return (
      <div className="product-table">
        <div className="product-lists">
          <span>Name</span>
          <span>Price</span>
        </div>
        {this.showProductRow()}
      </div>
    );
  }
}

export default ProductTable;
