import React, { Component } from 'react';
import SearchBar from './SearchBar';

class ProductTable extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="checkbox" />
        </div>

        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
