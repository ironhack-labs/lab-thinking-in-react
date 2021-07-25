import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import productData from './data.json';
import ProductTable from '../components/ProductTable';

function App() {
    const [products, setProducts] = useState(productData.data);
    const [filteredProducts, setFilteredProducts] = useState(productData.data);
    const [searchText, setSearchText] = useState('');
    const [displayStock, setDisplayStock] = useState(true);

    useEffect(() =>{
      filterProducts();
     }, [displayStock, searchText])

     const handleSearch = event => {
       const searchText = event.target.value.toLowerCase();
       setSearchText(searchText);
     }

     const handleDisplayStock = event =>{
       const displayStock = event.target.checked;
       setDisplayStock(displayStock);
     }

     const filteredProducts = () =>{
       let newFilteredProducts = products;
       if(displayStock === false){
          newFilteredProducts = products.filter(product => product.stocked);
        }   
        newFilteredProducts = newFilteredProducts.filter(products => product.name.toLowerCase().includes(searchText));
        setFilteredProducts(newFilteredProducts);  
      }


  
  
     return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h1 style={{display: "flex", justifyContent: "center"}}> IronStore </h1>
        <SearchBar onSearch={handleSearch} onDisplayStock={handleDisplayStock} />
        <ProductTable products={filteredProducts}/>
    </div>
  </div>
  );
}

