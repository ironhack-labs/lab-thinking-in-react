import React from 'react';
import ProductRow from './ProductRow'
import jsonData from '../data.json'; //¿porque aqui no tengo que exportar los datos?

const ProductTable = ({ products }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
