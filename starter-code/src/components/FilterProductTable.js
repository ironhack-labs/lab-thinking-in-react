import React, { Component } from "react";

class Product extends Component {
  render() {
    const { category, price, stocked, name } = this.props.info;

    return (
      <div>
        <table>
          <tr>
            <td className={(stocked ? 'inStock' : 'outOfStock')}>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default Product;



