import React, { Component } from "react";
import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";
import './ProductTable.css';

export default class SearchBarProductTable extends Component {

  render() {

    return (
      <table className="ProductTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {
                Object.keys(this.props.products).map(category => {
                    const productsHTML = this.props.products[category].map(product => <ProductRow product={product} />)
                    return <React.Fragment><ProductCategoryRow category={category}/> {productsHTML}</React.Fragment>
                })
            }
        </tbody>
      </table>
    );
  }
}
