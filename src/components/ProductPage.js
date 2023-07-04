import productData from '../data.json';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductPage() {
  const [products, setProducts] = useState(() => productData);

  return (
    <div className='big-container'>
      <h1>IronStore</h1>
      <SearchBar />

      <table>
      <thead className='table-heading'>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>

    <tbody>
    {products.map((product) => <ProductTable key={product.id} product={product} />)}
    </tbody>
      </table>

      

     
    </div>
  )
}
