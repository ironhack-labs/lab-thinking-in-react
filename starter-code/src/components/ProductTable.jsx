import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // console.log(this.props);
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
            {this.props.products.map(element => {
              return <ProductRow product={element} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
