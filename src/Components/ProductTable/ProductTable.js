import React from 'react';

import './ProductTable.css';

import ProductRow from '../ProductRow/ProductRow';

import data from '../../data.json';

export default class ProductTable extends React.Component {
  state = {
    products: data.data,
  };

  render() {
    const visibleProducts = this.state.products.filter((product) => {
      return this.props.showOutOfStock || product.stocked
        ? product.name.toLowerCase().includes(this.props.filter.toLowerCase())
        : false;
    });
    console.log(`filter: "${this.props.filter}"`, visibleProducts);

    const categories = visibleProducts
      .map((product) => product.category)
      .reduce(
        (unique, category) =>
          unique.includes(category) ? unique : [...unique, category],
        []
      );

    const sections = [];
    categories.forEach((category) => {
      sections.push(
        <div key={category}>
          <h3 className="category-title">{category}</h3>
          {visibleProducts
            .filter((product) => product.category === category)
            .map((product) => {
              return <ProductRow key={product.id} {...product} />;
            })}
        </div>
      );
    });

    return <div className="product-table">{sections}</div>;
  }
}
