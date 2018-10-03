import React, { Component } from "react";
import data from "../data.json";


class ProductCategoryRow extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div style={{border: 'orange'}}>
    <h2>{this.props.category}</h2>
    </div>
    );
  }
}

export default ProductCategoryRow;
