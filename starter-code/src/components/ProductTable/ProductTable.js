import React, { Component } from "react";
import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";

export default class ProductTable extends Component {
  render() {
   
    return (
      <div>
      
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tr>
          
            <ProductCategoryRow  category={this.props.product.category}/>
            {this.props.product.products.map((product, index) => {
            return <ProductRow product= {product} />;
          })}
            
          </tr>
          <tr />
        </table>
      </div>
    );
  }
}
