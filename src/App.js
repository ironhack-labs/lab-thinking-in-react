import React, { useState, useEffect } from 'react';
import './App.css';
import { ProductRow } from './components/ProductRow';
import { ProductTable } from './components/ProductTable';
import SearchBar from './components/SearchBar';
import data from './data.json';

function App() {
  const [allProducts, setAllProducts] = useState([...data.data]);
  const [isSearch, setIsSearch] = useState();
  const [searchResults, setSearchResults] = useState();

  const getSearchQuery = (data) => {
    setIsSearch(data);
    console.log('data', data);
  };
  useEffect(() => {
    setSearchResults([]);
  }, [allProducts]);

  useEffect(() => {
    const results = allProducts.filter((product) =>
      product.name.includes(isSearch)
    );
    setSearchResults(results);
  }, [allProducts, isSearch]);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar getSearchQuery={getSearchQuery} />
      <ProductTable>
        {searchResults.map((product) => {
          return <ProductRow name={product.name} price={product.price} />;
        })}
      </ProductTable>
    </div>
  );
}

export default App;
