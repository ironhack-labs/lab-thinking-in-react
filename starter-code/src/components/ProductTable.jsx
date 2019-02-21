import React, {Component} from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render () {
    return (
      <table>
        <thead>
          <tr className="container">
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.listProd.map ((prod, idx) => {
            return <ProductRow key={idx} oneProd={prod} />;
          })}
        </tbody>
      </table>
    );
  }
}
