import { useState } from 'react';
import jsonData from '../../data.json';
import './Products.css';
import SearchBar from '../../components/Products/SearchBar';

export default function Products() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div id="products-page">
      <h1 className="page-title">IronStore</h1>
      <div className="wrapper">
        <SearchBar />
      </div>
    </div>
  );
}
