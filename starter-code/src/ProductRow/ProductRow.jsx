import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    let classRed = this.props.rowPayLoad.stocked ? "red" : "black"
    return (
      
        <tr>
          {/* {console.log(this.props.rowPayLoad)} */}
          <td className={classRed}>{this.props.rowPayLoad.name}</td>
          <td>{this.props.rowPayLoad.price}</td>
        </tr>
     
    );
  }
}
