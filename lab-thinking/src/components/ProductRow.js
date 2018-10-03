import React, { Component } from "react";
import data from "../data.json";


class ProductRow extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div style={{border: 'orange'}}>
    <p style={{color:this.props.color}}>{this.props.name} {this.props.price}</p>
    
    </div>
    );
  }
}

export default ProductRow;