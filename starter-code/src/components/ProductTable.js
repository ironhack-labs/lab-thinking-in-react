import React, { Component } from "react";


export default class ProductTable extends Component {
  render() {
    console.log("me llegan los props", this.props)
    return (
      <table className="uk-table uk-table-striped">
    <thead>
        <tr>
            <th>Table Heading</th>
            <th>Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td> 
        </tr>
    </tbody>
</table>
    )
  }
}
