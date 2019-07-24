import React, { Component } from 'react';
import './productTable.css';
import ProductRow from '../productRow/ProductRow';

class ProductTable extends Component {

  showProductRow() {
    return this.props.products
    .filter(eachProduct=> {
      if(this.props.showInstockOnly) {
        return eachProduct.stocked
      } else {
        return eachProduct
      }
    })
    .map((eachProduct, i) => {
      return (
        <ProductRow key={i} name={eachProduct.name} price={eachProduct.price} inStock={eachProduct.stocked}/>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="table-header">
          <h6 className="title is-size-6 inline">Name</h6>
          <h6 className="title is-size-6 inline">Price</h6>
        </div>
          <div className="container">
            {this.showProductRow()}
          </div>
      </div>
    );
  }
}

export default ProductTable;