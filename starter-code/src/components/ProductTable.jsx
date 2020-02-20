import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.search);
    console.log(
      this.props.products.filter(element => {
        return element.name
          .toLowerCase()
          .includes(this.props.search.toLowerCase());
      })
    );
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products
            .filter(element => {
              return element.name
                .toLowerCase()
                .includes(this.props.search.toLowerCase());
            })
            .filter(element => {
              if (this.props.checkStatus) {
                return element.stocked === true;
              }
              return true;
            })
            .map((element, index) => {
              console.log(element.name);
              return <ProductRow product={element} key={index} />;
            })}
        </tbody>
      </table>
    );
  }
}
