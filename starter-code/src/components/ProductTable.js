import React, { Component } from 'react';
import ProductRow from './ProductRow'
import '../App.css';

class ProductTable extends Component {
  state = {
    // products:this.props.products
  }
  showProducts () {
    let products = this.props.products;
    return products.map((aProduct, i) => {
      //console.log(aProduct)
      return (
      <tr key={i}>
        <td>{aProduct.name}</td>
        <td>{aProduct.price}</td>
      </tr>
      )
    })
  }

  render() {
    //console.log(this)
    return (
      <div className="App">
        <header className="ProductTable">
          <table>
            <tbody>
              
              {this.showProducts()}
              {/* <ProductRow productName={aProduct}/> */}
            </tbody>
          </table>
        </header>
      </div>
    );
  }

}

export default ProductTable;
