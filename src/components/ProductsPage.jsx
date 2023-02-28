import { useState } from 'react';
import data from '../data.json';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';


export const ProductsPage = () => {
  const [products, setProducts] = useState(data);
  const [onlyInStock, setOnlyInStock] = useState(false);
  function handleSearch(userInput) {
    if (!userInput) {
      setProducts(data);
    } else {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(userInput.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  }
  function inStockToggle(data) {
   if (onlyInStock === false){
    setProducts(data)
    setOnlyInStock(!onlyInStock)
   }
   else{
    const inStockProducts = data.filter(product => product.inStock === true)
    setProducts(inStockProducts)
    setOnlyInStock(onlyInStock)
   }
  }
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleSearch={handleSearch} inStockToggle={inStockToggle} />

      <ProductTable products={products} />
    </div>
  );
};
