import React from 'react';
import Header from './components/Header';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';
import './App.css';

const App = () => {
  const products = data.data;
  return (
    <div className='App'>
      <Header />
      <FilterableProductTable products={products} />
    </div>
  );
}

export default App;
