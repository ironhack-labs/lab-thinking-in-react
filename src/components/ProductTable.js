import React, {Component} from 'react';
import ProductRow from './ProductRow'

class ProductTable extends Component {

  render() {
      console.log(this.props)
    return (
            <tbody>
            {this.props.products.map((product, index) => {
            return <ProductRow product={product} id={index} />
            })}
            </tbody>
    )
  }
}

export default ProductTable;