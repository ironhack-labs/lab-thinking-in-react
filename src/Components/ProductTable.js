import React, { Component } from 'react'
import ProductRow from './ProductRow'

import 'bulma/css/bulma.css';

class ProductTable extends Component {

  render() {
    return (
      <table className="table is-fullwidth">
        <thead className='has-background-light has-text-centered'>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.filteredProductList.map(product =>
            <ProductRow product={product} key={product.id} />
          )}
        </tbody>
      </table>
    )
  }
}

export default ProductTable;