import React, { Component } from 'react';

class ProductRow extends Component {
  constructor(props) {
    super(props)
    // this.state()
  }
  render() {
    return (
        <li className = "productRow">
        {this.props.stocked ? <p>{this.props.name}</p> : <p className="red">{this.props.name}</p>}
        <p>{this.props.price}</p>
        </li>
    )
  }
}
export default ProductRow