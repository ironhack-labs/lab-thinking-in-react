import React, { Component } from 'react';

class ProductRow extends Component {
  constructor(props){
    super(props);
    this.state = { 
    }
  }

  
  render () {
    return (
      <tr>
        <td style={this.props.myColor}>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
  )
}

} 


export default ProductRow;