import React from 'react';
import {data} from "./data.json"
import './App.css';
import ProductTable from "./components/ProductTable/ProductTable"
import SearchBar from "./components/SearchBar/SearchBar"

function App() {
  const [query, setQuery] = React.useState('');
  const [products, setProducts] = React.useState(data)
  const [stocked, setStocked] = React.useState(true)

  const handleQuery = ({ target }) => setQuery(target.value);

  const handleOnClick = () => {
      if(stocked){
        const stockedProducts = [...products].filter(product => product.stocked === true)
        setProducts(stockedProducts)
        setStocked(false)
      } else {
        setProducts(data)
        setStocked(true)
      }
  }


  return (
    <div className="App">
    <SearchBar onChange={handleQuery} query={query} onClick={handleOnClick} stocked={stocked}/>
    <ProductTable data={products} query={query} stockedProducts = {handleOnClick}/>
    </div>
  );
}

export default App;
