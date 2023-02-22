import React from 'react';
import data from '../data.json';

import { useState } from 'react';

import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';

const ProductsPage = () => {
  const [productsData, setProductsData] = useState(data);
  const [products, setProducts] = useState(data);
  const [productsUnfiltered, setProductsUnfiltered] = useState(data);
  const [showUnavailable, setShowUnavailable] = useState(true);

  const findProducts = (searchStr) => {
    const foundProducts = productsData.filter(product => product.name.toLowerCase().includes(searchStr.toLowerCase()));
    setProducts(foundProducts);
    setProductsUnfiltered(foundProducts);
  }

  const toggleUnavailable = (checked) => {
    if (checked) {
      const filteredProducts = products.filter(product => product.inStock)
      setShowUnavailable(false);
      setProducts(filteredProducts);
    } else {
      setProducts(productsUnfiltered)
      setShowUnavailable(true);
    }
  }

  return (
    <div className='row'>
      <div className="col">
        <h1 className='mb-4 fw-bold'>IronStore</h1>
        <SearchBar className='row' findProducts={findProducts} toggleUnavailable={toggleUnavailable} showUnavailable={showUnavailable} />
        <ProductsTable className='row' products={products}/>
      </div>
    </div>
  )
}

export default ProductsPage