import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [productsArray, setProducts] = useState(jsonData);
  const [filteredProductsArray, setFilteredProductsArray] = useState(jsonData);

  const filterProductsByString = (stringToSearch) => {
    const filteredProducts = productsArray.filter((productEl) => {
      console.log(productEl);
      return productEl.name
        .toLowerCase()
        .includes(stringToSearch.toLowerCase());
    });
    setFilteredProductsArray(filteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>

      <SearchBar handleSearch={filterProductsByString} />
      <ProductTable productsArray={filteredProductsArray} />
    </div>
  );
}

export default ProductsPage;
