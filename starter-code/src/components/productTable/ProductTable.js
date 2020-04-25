import React, { Component } from "react";
import './TableStyles.css';

export default class ProductTable extends Component {
  render() {
    console.log("me llegan los props", this.props)
    let {data, isAvailable} = this.props
    return (
      <table className="uk-table uk-table-striped">
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
    {/* to validate if we have data */}
       {data.length ? 
       data.map((item, index) =>
       isAvailable && !item.stocked ? null:
        <tr key={index}>
        {/* ternary operator to validate products in stock*/}
            <td className= {item.stocked ? '' : 'isStock'}>{item.name}</td>
            <td>{item.price}</td> 
        </tr>
       )
        : ''}
    </tbody>
</table>
    )
  }
}
