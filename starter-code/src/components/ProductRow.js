import React, { Component } from 'react';

class ProductRow extends Component {
    render() {
      return (
        <tr className="ProductRow">
                  <td style={{color:(!this.props.stocked) ? "red" : "black"}} >{this.props.name}</td>
                  <td>{this.props.price}</td>
                </tr>
      )
    }
  }
  
export default ProductRow;