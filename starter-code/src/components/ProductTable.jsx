import React, { Component } from 'react';

import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    const list = this.props.productList.data; // I need to acces to data in the rigth momment
    console.log(list);
    return (
      <div>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
        <tbody>
          {list.map(item => (
            <ProductRow product={item} />
          ))}
        </tbody>
      </div>
    );
  }
}
