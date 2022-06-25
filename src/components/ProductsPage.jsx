import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

import jsonData from '../data.json';

import './ProductsPage.css';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  function findProducts({query, showInStock}) {
    const foundProducts = jsonData.filter(({ name, inStock }) => {
      if (showInStock && !inStock) {
        return false;
      }

      return name.toLowerCase().includes(query.toLowerCase());
    });

    setProducts(foundProducts);
  }

  return (
    <div className='products-page'>
      <h1>IronStore</h1>
      <SearchBar {...{ findProducts }} />
      <ProductTable {...{ products }} />
    </div>
  )
}


export default ProductsPage