import productData from '../data.json';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductPage() {
  const [products, setProducts] = useState(() => productData);

  // Search input state to keep trach of the search input entered by the user
  const [searchInput, setSearchInput] = useState(() => '');
  // Filter product 
  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchInput.toLowerCase());
  })
  // It filters the products array based on the search input ==>
  // The filtered products are then mapped and rendered using the ProductTable component ==>
  // Each filtered product is passed as a prop to the ProductTable component ==>
  // The ProductTable component receives the product prop and renders a ProductRow component for each product.

  return (
    <div className='big-container'>
      <h1>IronStore</h1>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />

      <table>
      <thead className='table-heading'>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>

    <tbody>
    {filteredProducts.map((product) => <ProductTable key={product.id} product={product} />)}
    </tbody>
      </table>

      

     
    </div>
  )
}
