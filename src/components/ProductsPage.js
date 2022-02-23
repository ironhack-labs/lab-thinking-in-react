import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const filterTable = (str) => {
    let productsCopy = [...products];
    let filteredList;

    if (str.length > 0) {
      filteredList = productsCopy.filter((item) => {
        return item.name.toLowerCase().includes(str.toLowerCase());
      });
    } else {
      filteredList = productsCopy;
    }

    setProducts(filteredList);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchProp={filterTable} />
      <ProductTable productTable={products} />
    </div>
  );
}

export default ProductsPage;
