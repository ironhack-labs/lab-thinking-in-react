import React, { Component } from "react";
import data from "../data.json";


class ProductRow extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div style={{border: 'orange'}}>
    <p>{this.props.name}</p>
    <p>{this.props.price}</p>
    </div>
    );
  }
}

export default ProductRow;