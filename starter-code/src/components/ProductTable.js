import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export class ProductTable extends Component {
  displayProduct = () => {
    const rows = [];
    let lastCategory = null;

    const searchInput = this.props.searchInput;
    const inStockFilter = this.props.inStockFilter;
    
  this.props.products.data.map((item, i) => {
    if (item.name.indexOf(searchInput) === -1) {
      return;
    }
    if (inStockFilter && !item.stocked) {
      return;
    }
    if (item.category !== lastCategory) { //get the category name and push in array...
      rows.push(<ProductCategoryRow className="category-title" item={item} key={Math.random()} />);
      
    }
    rows.push(<ProductRow className="product-item" item={item} key={Math.random()} />);
    lastCategory = item.category;
  });
  return rows;
  // console.log("This is rows in ProductTable" + rows);
}
  
  render() {
    return (
      <div className="producet-table-container">
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{this.displayProduct()}</tbody>
      </table>
      </div>
    )
  }
}

export default ProductTable
