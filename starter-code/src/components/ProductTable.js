import React, { Component } from 'react';
import ProductRow from './ProductRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from 'uuid';

class ProductTable extends Component {
  render() {
    const id = uuid();
    const filtered = this.props.products.filter((product) => {
      console.log(this.props);
      return product.name
        .toLowerCase()
        .includes(this.props.query.toLowerCase());
    });

    return (
      <div className="container mt-3">
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((product, index) => {
              return <ProductRow key={index} product={product} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
