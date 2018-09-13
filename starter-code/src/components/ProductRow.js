import React from 'react';
import './App.css';

class ProductRow extends React.Component {
  
  render() {
    return (
        <tr>
          <td style={{color: this.props.data.stocked ? "black" : "red"}}>{this.props.data.name}</td>
          <td>{this.props.data.price}</td>
        </tr>
    );
  }
}

export default ProductRow;
