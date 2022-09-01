import React, { useEffect, useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const ProductsPage = () => {
  const [data, setData] = useState(jsonData)
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([])

  useEffect(() => {
    if (Object.keys(filter).length > 0) {
      const filterCapitalizeUpperCase = filter.name && filter.name.charAt(0).toUpperCase() + filter.name.slice(1);
      const filterCapitalizeLowercase = filter.name && filter.name.charAt(0).toLowerCase() + filter.name.slice(1);
      let filterProduct = data.filter(product => product.name.includes(filterCapitalizeUpperCase) ||product.inStock == filter.stock || product.name.includes(filterCapitalizeLowercase));
      setProducts([...filterProduct]);
    } else {
      setProducts(jsonData)
    }
  }, [filter])

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar setFilter={setFilter} />
      <ProductTable gridData={products} />
    </div>
  )
}

export default ProductsPage