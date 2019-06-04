import React, { Component } from "react";


class ProductRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="box" style={this.props.isStocked ? {borderColor: 'black'} : {borderColor: 'red'} }>
        <span>{this.props.name}: </span>
        <span>{this.props.price}</span>
      </div>
    );
  }
}
export default ProductRow;
