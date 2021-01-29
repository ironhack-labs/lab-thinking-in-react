import React, { Component } from 'react'
import ProductRow from './ProductRow'

export class ProductTable extends Component {

   render() {
        return (
          <div>
            <h3>ProductTable</h3>
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
          </div>
        );
    }
}

export default ProductTable
