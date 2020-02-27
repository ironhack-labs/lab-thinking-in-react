import React, { Component } from 'react';
import  '../ProductRow.css'

class ProductRow extends Component {
  state = {
    name: '',
    stocked: true,
    price: 0
  };

 

  render() {
    console.log(this.props.stocked)
    // function getDerivedStateFromProps() {
    //     let colorProp;
    //     if (this.state.stocked) {
    //       colorProp = 'green';
    //     } else {
    //       colorProp = 'red';
    //     }
    //     return {
    //       color: colorProp
    //     };
    //   }
      
    return (
      <tr>
        <td className={this.props.stocked ? "black" : "red"}>{this.props.name}</td>
        <td>{this.props.price}$</td>
      </tr>
    );
  }
}

export default ProductRow;
