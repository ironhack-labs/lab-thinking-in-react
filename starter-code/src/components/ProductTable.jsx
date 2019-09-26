import React from 'react';
import products from '../data.json';
import Product from './Product';

const ProductTable = props => {
  //   console.log(props.products.data);
  const allProducts = props.products.data
    .filter(product =>
      product.name.toLowerCase().includes(props.query.toLowerCase())
    )
    .map(el => <Product data={el} />);
  //   console.log(props.products.data[0]);
  //   const allProducts = props.products.data
  //     .filter(product => {
  //       product.name.toLowerCase().includes(props.query.toLowerCase());
  //     })
  //     .map(products => <Product data={allProducts} />);

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>{allProducts}</tbody>
    </table>
  );
};

export default ProductTable;
