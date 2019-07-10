import React, { Component } from "react";

export default class ProductRow extends Component {
  // state = {
  //   dataList: data.data
  // };

  redOrBlack(someData) {
    var color = "black";
    if (someData.stocked === false) color = "red";
    return color;
  }

  render() {
    return (
      <tbody className="productRowContainer">
        {this.props.products.map((oneData, i) => {
          if (
            oneData.name
              .toLowerCase()
              .includes(this.props.userinput.toLowerCase())
          ) {
            return (
              <tr key={i}>
                <td className="namesContainer">
                  <h3 style={{ color: `${this.redOrBlack(oneData)}` }}>
                    {oneData.name}
                  </h3>
                </td>
                <td className="pricesContainer">
                  <h3>{oneData.price}</h3>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    );
  }
}
