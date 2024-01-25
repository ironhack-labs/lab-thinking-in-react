import { useState } from 'react';
import jsonData from '../../data.json';
import './Products.css';
import SearchBar from '../../components/Products/SearchBar';
import ProductTable from '../../components/Products/ProductTable';

export default function Products() {
  const [filter, setFilter] = useState({
    productName: '',
    onlyStock: false,
  });

  const filteredProducts = jsonData.filter((product) => {
    const validName = product.name.startsWith(filter.productName);
    const validStockValue = !filter.onlyStock || product.inStock;
    return validName && validStockValue;
  });

  return (
    <div id="products-page">
      <h1 className="page-title">IronStore</h1>
      <div className="wrapper">
        <SearchBar setFilter={setFilter} />
        <ProductTable products={filteredProducts} />
      </div>
    </div>
  );
}
