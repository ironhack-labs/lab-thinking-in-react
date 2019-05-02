import React, { Component } from 'react';
import './ProductTable.css'

export default class ProductTable extends Component {
  render() {
    return (
      <React.Fragment>
        <tr className={"product " + (this.props.stocked ? null : 'onStock')}>   
            <td>{this.props.name}</td>
            <td>{this.props.price}</td>
        </tr> 
      </React.Fragment>
    )
  }
}
