import React, { Component } from "react";
import "../ProductTable/ProducTable.css";
import ProductRow from "../ProductRow/ProductRow";

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          {" "}
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>{" "}
          {this.props.datos.data.map((e, inx) => {
            return <ProductRow datos={e} />;
          })}
        </table>
      </div>
    );
  }
}
