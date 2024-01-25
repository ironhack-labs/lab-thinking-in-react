import { useState } from 'react';
import jsonData from '../../data.json';
import './Products.css';
import SearchBar from '../../components/Products/SearchBar';
import ProductTable from '../../components/Products/ProductTable';

export default function Products() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div id="products-page">
      <h1 className="page-title">IronStore</h1>
      <div className="wrapper">
        <SearchBar />
        <ProductTable products={products} />
      </div>
    </div>
  );
}
