import React, { Component } from 'react';

import './ProductRow.css';

class ProductRow extends Component {
  state = {
    quantity: 1,
  };

  handleQuantity = (event) => {
    this.setState({ quantity: event.target.value });
  };

  handleTodayFood = (event) => {
    this.props.todayFoods(
      this.props.food.name,
      this.props.food.calories,
      this.state.quantity
    );
  };

  render() {
    return (
      <tr>
        {this.props.product.stocked ? (
          <td>{this.props.product.name}</td>
        ) : (
          <td className="out-of-stock">{this.props.product.name}</td>
        )}
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
