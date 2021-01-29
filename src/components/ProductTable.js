import React, { Component } from 'react'
import ProductRow from './ProductRow'
import '../App.css'

export class ProductTable extends Component {

   render() {
        return (
          <div >
            <h3>ProductTable</h3>
            <table className='productTable'>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
                {this.props.products.map((product) => {
                  return (
                    <ProductRow
                      key={product.name}
                      name={product.name}
                      price={product.price}
                      stocked={product.stocked}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        );
    }
}

export default ProductTable
