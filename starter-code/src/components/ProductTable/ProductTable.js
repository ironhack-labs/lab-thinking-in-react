import React, { Component } from "react";
import Row from "../ProductRow/Row";

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <Row></Row>
          </tbody>
        </table>
      </div>
    );
  }
}
