import React, { Component } from 'react';
import '../styles/Table.css';
import ProductRow from './ProductRow';

export default class Table extends Component {

    render() {
      return (
        <section className="table">
          <table className="products-list">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((product, i) => <ProductRow key={i} name={product.name} price={product.price} stocked={product.stocked}/>)}
                    </tbody>
                </table>
        </section>
      );
    }
  }