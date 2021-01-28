import React, { Component } from 'react'
import ProductRow from './ProductRow'

export class ProductTable extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            products: this.props.products.data
        }
    }

    render() {
      console.log(`Products: ${this.state.products}`)

        return (
          <div>
            <h3>ProductTable</h3>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            {this.state.products.map((product) => {
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
