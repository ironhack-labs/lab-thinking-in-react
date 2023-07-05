import productData from '../data.json';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductPage() {
  const [products, setProducts] = useState(() => productData);
  // Search input state to keep trach of the search input entered by the user
  const [searchInput, setSearchInput] = useState(() => '');
  // Checkbox state variable
  const [showInStock, setShowInStock] = useState(() => false);


  // Filter product 
  const filteredProducts = products.filter(product => {
    if (showInStock && !product.inStock) {
      return false;
    }
     return product.name.toLowerCase().includes(searchInput.toLowerCase());
    
  })
  // It filters the products array based on the search input ==>
  // The filtered products are then mapped and rendered using the ProductTable component ==>
  // Each filtered product is passed as a prop to the ProductTable component ==>
  // The ProductTable component receives the product prop and renders a ProductRow component for each product.
  // Check if 'showInStock' state is true && the 'inStock' property of the product is false. ==>
  // If the condition is true, return false to exclude the product from the filtered list ==>
  //  If the product passes the above condition, proceed to the next condition





  return (
    <div className='big-container'>
      <h1>IronStore</h1>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} showInStock={showInStock} setShowInStock={setShowInStock} />

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
