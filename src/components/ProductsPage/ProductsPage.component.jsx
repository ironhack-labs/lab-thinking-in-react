import { useState } from 'react';
import jsonData from './../../data.json';

import SearchBar from '../SearchBar/SearchBar.component';
import ProductTable from '../ProductTable/ProductTable.components';
export default function ProductsPage() {
  //State
  const [products, setProducts] = useState(jsonData);
  const [filtered, setFiltered] = useState('');

  let filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(filtered);
  });

  function handleSearchChange(searchText) {
    setFiltered(filteredProducts);
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        handleSearchChange={handleSearchChange}
        setFiltered={setFiltered}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
