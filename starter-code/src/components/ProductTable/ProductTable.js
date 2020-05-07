import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow';


export default class ProductTable extends Component {

  constructor(props) {
    super(props)

  }
  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.filteredProducts.map((idx) => <ProductRow key={idx} />)
            }
              
          </tbody>
        </table>
      </>
    );
  }
}
