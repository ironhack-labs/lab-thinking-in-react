import { useState } from 'react';
import jsonData from '../../src/data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [inStockCheckBox, setInStockCheckBox] = useState(false);

  const isInStockChangeHandler = (bool) => {
    createArray(searchTerm, bool);
    setInStockCheckBox(bool);
  };

  const searchChangeHandler = (text) => {
    createArray(text, inStockCheckBox);
    setSearchTerm(text);
  };

  const createArray = (text, bool) => {
    setFilteredProducts(
      products.filter(
        (p) =>
          p.name.toLowerCase().includes(text.toLowerCase()) &&
          (bool ? p.inStock : true)
      )
    );
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchTerm={searchTerm}
        onChange={searchChangeHandler}
        isInStock={isInStockChangeHandler}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
