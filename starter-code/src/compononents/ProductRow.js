import React, { Component, Fragment } from 'react';

class ProductRow extends Component {
  //props  : name, stocked, price (because at level of individual product here)

  render() {
    const filteredProducts = this.props.products.filter((product) => {
      console.log('products before filter:', product);
      return product.name
        .toLowerCase()
        .includes(this.props.search.toLowerCase())
        ? true
        : false;
    });

    return (
      <div>
        {filteredProducts.map((product) => (
          <tr key={product.name} className="product-row-container">
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </div>
    );
  }
}

export default ProductRow;
