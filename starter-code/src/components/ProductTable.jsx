import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import { StyledTable } from '../styledComponents/StyledTable';

export default class ProductTable extends Component {
  handleList(category) {
    //let prodArr = [];
    // this.props.products.map((p) => {
    //   if ((this.props.checked && p.stocked) || !this.props.checked) {
    //     return (p.category !== category) ? null : prodArr.push(<ProductRow key={p._id} product={p}/>)
    //   }
    // });
    let prodArr = this.props.products
      .filter(p => (this.props.checked && p.stocked) || !this.props.checked)
      .filter(p => p.category !== category)
      .map(p => <ProductRow key={p._id} product={p}/>);
    return prodArr < 1 ? <li className="productRow noProducts">There're no {category.toLowerCase()} products with those search features</li> : prodArr;
  }
  render() {
    return (
      <StyledTable>
        <div className="header">
          <span className="nameTitle">Name</span>
          <span className="priceTitle">Price</span>
        </div>
        <ProductCategoryRow name="Sporting Goods"></ProductCategoryRow>
        <ul className="productList firstList">
          {this.handleList('Sporting Goods')}
        </ul>

        <ProductCategoryRow name="Electronics"></ProductCategoryRow>
        <ul className="productList firstList">
          {this.handleList('Electronics')}
        </ul>
      </StyledTable>
    );
  }
}
