import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    const productrow = this.props.products.data.filter((data) => {
      return data.name.toLowerCase().includes(this.props.query.toLowerCase());
    });
    return (
      <>
        {productrow.map((item) => {
          return <ProductRow key={item.id} data={item} />;
        })}
      </>
    );
  }
}
