import React, { Component } from "react";
import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";

export default class SearchBarProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products
    };
  }

  render() {
      let html = [];
    // const products = this.props.products;
    for(let category in this.state.products) {
        //console.log(category, this.state.products[category]);
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {
                Object.keys(this.state.products).map(category => {
                    console.log(category)
                    const productsHTML = this.state.products[category].map(product => {
                        return <ProductRow product={product} />
                    })
                    return <React.Fragment><ProductCategoryRow category={category}/> {productsHTML}</React.Fragment>
                
                })
            }
        </tbody>
      </table>
    );
  }
}
