import { useState } from 'react';
import jsonData from '../data.json';
import ProductsTable from './ProductsTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [onlyInStock, setOnlyInStock] = useState(false);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!onlyInStock || product.inStock)
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    setOnlyInStock(event.target.checked);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onlyInStock={onlyInStock}
        onCheckboxChange={handleCheckboxChange}
      />
      <ProductsTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
