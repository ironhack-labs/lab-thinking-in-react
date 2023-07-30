import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [word, setWord] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const onSearch = (searchWord) => setWord(searchWord);

  const inStock = (searchInStock) => setInStockOnly(searchInStock);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onSearch={onSearch} inStock={inStock} />

      <ProductTable products={products} word={word} inStockOnly={inStockOnly} />
    </div>
  );
};

export default ProductsPage;
