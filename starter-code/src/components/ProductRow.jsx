import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const { products } = this.props;    
    console.log(products);
    return (
      <tbody>
        {products.data.map(item => <tr key={item.name}><td>{item.name}</td><td>{item.price}</td></tr>)}
      </tbody>
    );
  }
}

export default ProductRow;