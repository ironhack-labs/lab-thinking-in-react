import React from 'react';
import './App.css';
import ProductsPage from './components/ProductsPage';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <ProductsPage products={data} />
    </div>
  );
}

export default App;
