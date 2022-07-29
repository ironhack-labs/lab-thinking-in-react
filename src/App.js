import React from 'react';
import data from './data.json'
import './App.css';
import ProductsPage from './components/ProductsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <h1>Thinking in React</h1>
      <ProductsPage products={data} />
    </div>
  );
}

export default App;