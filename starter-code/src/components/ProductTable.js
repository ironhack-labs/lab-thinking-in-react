import React, { Component } from 'react';
import ProductRow from './ProductRow'
import '../App.css';

class ProductTable extends Component {
  state = {
    products:this.props.products
  }

  render() {
    return (
      <div className="App">
        <header className="ProductTable">
          <table>
            <tbody>
              <ProductRow productName={aProduct}/>
            </tbody>
          </table>
        </header>
      </div>
    );
  }

  showProducts () {
    let products = this.props.products;
    return products.map((aProduct, i) => {
      return (
      <tr key={i}>
        <td>{products[i].name}</td>
        <td>{products[i].price}</td>
      </tr>
      )
    })
  }
}

export default ProductTable;
