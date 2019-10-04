import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  
  render() {
    console.log('stocked', this.props.stockedProducts)
    console.log('total', this.props.products)
    console.log('state', this.props.checkedBox)
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.props.checkBox && (
              <span>{this.props.stockedProducts.map((product, idx) => {
                return <ProductRow key={idx} {...product}></ProductRow>
              })}</span>
            )}
            {!this.props.checkBox && (
              <span>{this.props.products.map((product, idx) => {
                return <ProductRow key={idx} {...product}></ProductRow>
              })}</span>
            )} */}


            {this.props.products.map((product, idx) => {
              return <ProductRow key={idx} {...product}></ProductRow>;
            })}
            
          </tbody>
        </table>
      </div>
    );
  }
}
