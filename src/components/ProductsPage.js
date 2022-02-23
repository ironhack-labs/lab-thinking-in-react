import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  //always add updated state
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterTable = (str) => {
    let filteredList;

    if (str.length > 0) {
      filteredList = products.filter((item) => {
        return item.name.toLowerCase().includes(str.toLowerCase());
      });
    } else {
      filteredList = products;
    }
    setFilteredProducts(filteredList);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchProp={filterTable} />
      <ProductTable productTable={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
