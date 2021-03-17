import React, { Component } from 'react'
import ProductRow from './ProductRow'
import '../styles/ProductTable.css'

export class ProductTable extends Component {
    render() {

        // console.log(this.props.products)

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
              {this.props.products.map((product) => 
                  <ProductRow product={product} key={product.id}/>
              )}
              </tbody>
            </table>
          </div>
        );
    }
}

export default ProductTable
