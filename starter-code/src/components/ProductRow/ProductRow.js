import React, { Component } from "react";

export default class ProductRow extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.products.map(elem => {
          if (elem.stocked) {
            return (
              <tr>
                <td>{elem.name}</td>
                <td>{elem.price}</td>
              </tr>
            );
          } else {
            return (
              <tr>
                <td style={{ color: "red" }}>{elem.name}</td>
                <td>{elem.price}</td>
              </tr>
            );
          }
        })}
      </React.Fragment>
    );
  }
}
