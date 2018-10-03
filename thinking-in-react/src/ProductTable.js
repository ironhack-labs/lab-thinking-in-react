import React from "react";
import data from "./data.json";
import SearchBar from "./SearchBar";
import { ProductCategoryRow } from "./ProductCategoryRow";
import {ProductRow} from "./ProductRow";

class ProductTable extends React.Component {
  render() {
    const rows = {};
    this.props.products.forEach((product, index) => {
      if (rows[product.category]) {
        rows[product.category].push({
          price: product.price,
          stocked: product.stocked,
          name: product.name
        });
      } else {
        rows[product.category] = [];
        rows[product.category].push({
          price: product.price,
          stocked: product.stocked,
          name: product.name
        });
      }
    });
    
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(rows).map(category => {
            return (
              <div>
                <ProductCategoryRow category={category} />
                <ProductRow products={rows[category]} />
              </div>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
