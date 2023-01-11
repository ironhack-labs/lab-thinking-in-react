import { useState } from 'react';
import jsonData from './../../data.json';

import SearchBar from '../SearchBar/SearchBar.component';
import ProductTable from '../ProductTable/ProductTable.components';
export default function ProductsPage() {
  //State
  const [products, setProducts] = useState(jsonData);
  const [searchText, setSearchText] = useState('');

  function handleSearchChange(searchText) {
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setProducts(filteredProducts);
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleSearchChange={handleSearchChange} />
      <ProductTable products={products} />
    </div>
  );
}
