import React from 'react';
import {data} from "./data.json"
import './App.css';
import ProductTable from "./components/ProductTable/ProductTable"
import SearchBar from "./components/SearchBar/SearchBar"

function App() {
  const [query, setQuery] = React.useState('');
  const [products, setProducts] = React.useState(data)
  //const [stock, setStock] = React.useState(true)

  const handleQuery = ({ target }) => setQuery(target.value);

  const handleOnClick = ({target}) => {
      let clicked = target.value
      let stockAviable = [...products]
      if(clicked){
        stockAviable = stockAviable.filter((product) => product.stocked === true)
      }
  } 
  return (
    <div className="App">
    <SearchBar onChange={handleQuery} query={query} onClick={handleOnClick}/>
    <ProductTable data={products} query={query}/>
    </div>
  );
}

export default App;
