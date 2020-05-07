import React, { Component } from 'react';
import ProductRow from './ProductRow';


class ProductTable extends Component {
  render() {
    return (
      <div className="App">
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        
        <ProductRow isStocked = {this.props.isStocked} query = {this.props.query} products = {this.props.products}/>  
      
      </table>
    </div>
      </div>
    );
  }
}

export default ProductTable;