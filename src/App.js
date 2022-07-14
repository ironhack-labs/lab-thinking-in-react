import { useState, React } from 'react';
import './App.css';
import ProductsPage from './components/ProductsPage';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <ProductsPage />
    </div>
  );
}

export default App;