import React, { Component } from 'react';
import ProductRow from './ProductRow';
import './Productrow.css'


export default class ProductTable extends Component {
  render() {
    return (
      <div >
          {this.props.products.map((element,idx) => <div className="product" key={idx}> <ProductRow product={element}/><hr/></div>)}
      </div>
    )
  }
}
