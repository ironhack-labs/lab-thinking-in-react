import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


export default class ProductTable extends Component {
  handleList(category) {
    let prodArr = this.props.products
    .filter(p => (this.props.checked && p.stocked) || !this.props.checked)
    .filter(p => p.category == category)
    .filter(p => p.name.includes(this.props.search))
    .map(p => <ProductRow key={p.name} product={p}/>);
    return prodArr;
  }
  render() {
    return (
      <div>
        <p>Name  Price</p>

        
        <ProductCategoryRow name="Sporting Goods"></ProductCategoryRow>
        <ul>
          {this.handleList('Sporting Goods')}
        </ul>

        <ProductCategoryRow name="Electronics"></ProductCategoryRow>
        <ul>
          {this.handleList('Electronics')}
        </ul>
        </div>
    );
  }
}