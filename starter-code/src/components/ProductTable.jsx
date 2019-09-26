import React from 'react';
import products from '../data.json';
import Product from './Product';

const ProductTable = props => {
  //   console.log(props.products.data);
  const sportingGoods = props.products.data
    .filter(product => {
      const name = product.name
        .toLowerCase()
        .includes(props.query.toLowerCase());

      const sporting = product.category === 'Sporting Goods';

      const checked = product.stocked;
      return props.checked ? name && sporting && checked : name && sporting;
    })
    .map(el => {
      return <Product data={el} />;
    });

  const electronics = props.products.data
    .filter(product => {
      const name = product.name
        .toLowerCase()
        .includes(props.query.toLowerCase());

      const eletronics = product.category === 'Electronics';

      const checked = product.stocked;
      return props.checked ? name && eletronics && checked : name && eletronics;
    })
    .map(el => <Product data={el} />);

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {sportingGoods.length !== 0 && (
          <tr>
            <td>Sporting Goods</td>
          </tr>
        )}
        {sportingGoods}
        {electronics.length !== 0 && (
          <tr>
            <td>Electronics</td>
          </tr>
        )}
        {electronics}
      </tbody>
    </table>
  );
};

export default ProductTable;
