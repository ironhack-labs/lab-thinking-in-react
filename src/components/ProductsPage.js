import { useState } from 'react';
import jsonData from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [findProducts, setFindProducts] = useState(jsonData);
  const [inStock, setInStock] = useState(false);
  const [productsInStock, setProductsInStock] = useState(jsonData);
  const [filterProductsInStock, setFilterProductsInStock] = useState(jsonData);

  const searchProduct = (query) => {
    const arrayOfFoundProducts = products.filter((element) => {
      return element.name.toLowerCase().includes(query.toLowerCase());
    });
    const arrayOfFoundInStockProducts = filterProductsInStock.filter(
      (element) => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      }
    );
    setFindProducts(arrayOfFoundProducts);
    setProductsInStock(arrayOfFoundInStockProducts);
  };

  const checkInStock = products.filter((element) => {
    return element.inStock;
  });

  const toggleInStock = (value) => {
    setInStock(!inStock);
    const getInStockProducts = products.filter((element) => {
      return element.inStock;
    });

    setProductsInStock(getInStockProducts);
    setFilterProductsInStock(getInStockProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchProduct={searchProduct} toggleInStock={toggleInStock} />
      <ProductTable products={inStock ? productsInStock : findProducts} />
    </div>
  );
};

export default ProductsPage;
