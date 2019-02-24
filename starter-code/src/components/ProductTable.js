import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {

  render() {
    return (
      <div className="ProductTable">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">In Stock?</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {!this.props.checked &&
              this.props.products.map((product, i)  => <ProductRow key={i} product={product}/>)
            }
            {this.props.checked &&
              this.props.products
              .filter(product => product.stocked)
              .map((product, i)  => <ProductRow key={i} product={product}/>)
            }

            {/* {this.props.products.map((product, i)  => <ProductRow key={i} product={product}/>)} */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;