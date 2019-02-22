import React, { Component } from "react";
import "./ProductRow.css";

class ProductRow extends Component {
  render() {
    // console.log(this.props.products);
    const { theProducts } = this.props;
    console.log(theProducts);

    return (
      <div className="ProductRow">
        {/* MAP on an array sent by the app.js */}

        <tbody>
          {theProducts.map(oneProduct => {
            return oneProduct.stocked ? (
              <tr>
                <td>{oneProduct.name}</td>
                <td>{oneProduct.price}</td>
              </tr>
            ) : (
              <tr className="out-of-stock">
                <td>{oneProduct.name}</td>
                <td>{oneProduct.price}</td>
              </tr>
            );
          })}
        </tbody>
      </div>
    );
  }
}

export default ProductRow;
