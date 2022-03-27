import React from 'react';
import './App.css';
import productsArr from './data.json';
import { useState } from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import ProductBox from './components/ProductsBox/ProductBox';


function App() {
  const [products, setProducts] = useState(productsArr);

  function filterByProduct(productName) {
    if (productName !== '') {
      setProducts((productSetted) => {
        return productSetted.filter((product) =>
          product.name.toLowerCase().includes(productName.toLowerCase())
        );
      });
    } else {
      setProducts(productsArr);
    }
  }
  return (
    <>
    <div className="App">
     <h1 className="title">IronStore</h1>
    	<SearchBar filterByProduct={ filterByProduct }/>
    </div>
     <div>
     {products.map((product, index) => (
       <ProductBox key={index} product={product} />
     ))}
   </div>
   </>
  );
}

export default App;
