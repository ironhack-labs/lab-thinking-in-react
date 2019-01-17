import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import { StyledTable } from '../styledComponents/StyledTable';

export default class ProductTable extends Component {
  handleCategory() {
    let cat = [];
    this.props.products.forEach(p => {if (cat.indexOf(p.category) === -1) {cat.push(p.category)}});
    return cat;
  }
  handleList(cat) {
    let prodArr = this.props.filterProducts
      .filter(p => (this.props.checked && p.stocked) || !this.props.checked)
      .filter(p => p.category === cat)
      .map(p => <ProductRow key={p._id} product={p}/>);
    return prodArr < 1 ? <li className="productRow noProducts">There're no {cat.toLowerCase()} products with those search features</li> : prodArr;
  }
  render() {
    return (
      <StyledTable>
        <div className="header">
          <span className="nameTitle">Name</span>
          <span className="priceTitle">Price</span>
        </div>
        {this.handleCategory()
          .map((c)=>{
            return (
              <div key={c} className="categoryProducts">
                <ProductCategoryRow name={c}></ProductCategoryRow>
                <ul className="productList">{this.handleList(c)}</ul>
              </div>
            )
          })
        }
      </StyledTable>
    );
  }
}
