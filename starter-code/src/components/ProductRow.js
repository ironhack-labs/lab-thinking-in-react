import React, { Component } from "react";

export default class ProductRow extends Component {
  render() {
    return (
      <tbody>
        {this.props.products.map((el, index) => {
          //  console.log(this.props.checkdActive)
          if (this.props.checkedActive) {
            return (
              el.stocked && (
                <tr key={index}>
                  <td style={{ color: el.stocked ? "black" : "red" }}>
                    {el.name}
                  </td>
                  <td style={{ color: el.stocked ? "black" : "red" }}>
                    {el.price}
                  </td>
                </tr>
              )
            );
          } else {
            return (
              <tr key={index}>
                <td style={{ color: el.stocked ? "black" : "red" }}>
                  {el.name}
                </td>
                <td style={{ color: el.stocked ? "black" : "red" }}>
                  {el.price}
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    );
  }
}
