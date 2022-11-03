import { useState } from 'react';
import jsonData from '../data.json';
import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(jsonData);

  const handleSearch = (event) => {
    const searchedProducts = products.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFilteredProducts(searchedProducts);
  };

  const handleCheck = (checked) => {
    if (checked === true) {
      const productsInStock = products.filter(
        (product) => product.inStock === true
      );
      setFilteredProducts(productsInStock);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleSearch={handleSearch} handleCheck={handleCheck} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
