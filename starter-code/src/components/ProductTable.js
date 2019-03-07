import React, { Component } from 'react';
import '../App.css';
import ProductRow from './ProductRow';

class ProductTable extends Component {

  showProducts = () => {
    return this.props.products.map((aProduct, i) => {
      return <ProductRow index={i.toString()}  productName={aProduct} />
    })
  }

  render() {
    return (
      <div className="ProductTable">
        <table>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
          {this.showProducts()}
        </table>
        
      </div>
    );
  }
}

export default ProductTable;