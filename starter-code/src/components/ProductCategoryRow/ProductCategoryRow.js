import React, { Component } from "react";

import ProductRow from "../ProductRow";

export default class ProductCategoryRow extends Component {
  state = {
    myProducts: []
  };

  getCategories = () => {
    const mappedProducts = [];
    for (let category in this.props.categories) {
      mappedProducts.push(
        <tr>
          <th>{category}</th>
        </tr>,
        <ProductRow products={this.props.categories[category]} />
      );
    }
    return mappedProducts;
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      myProducts: this.getCategories()
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      this.setState({
        ...this.state,
        myProducts: this.getCategories()
      });
    }
  }

  render() {
    return (
      <React.Fragment>{this.state.myProducts.map(elem => elem)}</React.Fragment>
    );
  }
}
