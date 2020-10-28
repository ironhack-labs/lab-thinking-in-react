import React, {Component} from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render () {
      console.log(this.props.products)
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
              {/* <ProductRow products={this.props.products} /> */}
              {this.props.products.map(product => {
                return <ProductRow product={product} />
              })}
            </tbody>
          </table>
        </div>
      )
    }
  }
  export default ProductTable