import { useState } from 'react';
import jsonData from "../data.json"
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow'; // consider creating this component

export default function ProductPage() {
  const [products, setProducts] = useState(() => jsonData);

  const [searchInput, setSearchInput] = useState(() => '');

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div className='main-container'>
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