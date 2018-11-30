import React, { Component } from "react";
import ProductRow from "./ProductRow";
import productsArray from "../data.json";

class ProductCategoryRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: productsArray
    };
  }
  render() {
    const { category } = this.props;
    console.log(category)
    return (
    
           <thead> {category}
          </thead>
    );
  }
}


export default ProductCategoryRow;
