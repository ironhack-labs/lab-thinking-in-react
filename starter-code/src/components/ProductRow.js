import React, { Component } from 'react';

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.color = 'red';
  }

  render() {
    console.log(this.props.product.stocked)
    let classNameA ="has-text-centered" 
    if(!this.props.product.stocked && this.color) classNameA ="has-text-centered red" 
    else classNameA ="has-text-centered" 
    return (
      <tr >
      
        <td  className={classNameA}>{this.props.product.name}</td>
        <td className="has-text-centered">{this.props.product.price}</td>
      </tr>
    );
  }
}
export default ProductRow;
