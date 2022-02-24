import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProductsList = (char) => {
    let filteredList;

    if (char === '') {
      filteredList = products;
    } else {
      filteredList = products.filter((eachProduct) => {
        return eachProduct.name.toLowerCase().includes(char.toLowerCase());
      });
    }
    setFilteredProducts(filteredList);
  };

  const filterStock = (checked) => {
    if (checked) {
      const isInStock = products.filter((eachProduct) => {
        return eachProduct.inStock;
      });
      setFilteredProducts(isInStock);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <>
      <h1>IronStore</h1>
      <SearchBar
        filterStockHandler={filterStock}
        filterProductsHandler={filterProductsList}
      />
      <ProductTable products={filteredProducts} />
    </>
  );
}

export default ProductsPage;