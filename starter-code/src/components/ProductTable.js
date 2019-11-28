import React, { Component } from 'react';
import ProductRow from './ProductRow';

export class ProductTable extends Component {
  render() {
    const filtered = this.props.products.data.filter(product => {
      if (
        product.name.toLowerCase().includes(this.props.filter.toLowerCase())
      ) {
        return true;
      }
    });

    const onlyStocked = this.props.products.data.filter(product => {
      if (
        product.name.toLowerCase().includes(this.props.filter.toLowerCase()) &&
        product.stocked === this.props.inStock
      ) {
        return true;
      }
    });

    return (
      <div>
        <table style={{width: "100vh", margin:"20px"}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody style={{textAlign:"center"}}>
            <ProductRow 
              filtered={filtered}
              checked={this.props.inStock}
              onlyStocked={onlyStocked}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
