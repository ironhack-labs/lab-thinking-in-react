import React from 'react';
import ProductRow from './ProductRow';
import jsonData from '../data.json';

const initialProducts = jsonData;
console.log('initial Products Table : ', initialProducts);

function ProductTable(props) {
  return (
    <div className="productTable">
      <h1>ProductTable</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((el) => {
            return <ProductRow key={el.id} productFromList={el} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
