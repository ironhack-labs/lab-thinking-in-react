import React from 'react';
import './App.css';
import jsondata from './data.json'
import ProductTable from './components/ProductTable/ProductTable';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  let products = jsondata.data
  console.log("products", products)

  const [filteredProducts, setFilteredProducts] = React.useState(products)

  const searchProducts = (userInput) => {
    let filteredArr = products.filter(item => item.category.toLowerCase().includes(userInput))
    console.log("filteredArr",filteredArr)
    setFilteredProducts(filteredArr)
    //setFilteredProducts(products => products.filter(item => item.name.toLowerCase().includes(userInput) ))
  }

  const stockProducts = () => {
    console.log("stock prods true")
    let filteredArr = products.filter(item=> item.stocked === true)
    console.log("stockproducts filtered", filteredArr)
    setFilteredProducts(filteredArr)
  }

  return (
    <div className="App">
      <h1>IronStore</h1>
      <SearchBar products={filteredProducts} onChange={searchProducts} filterStockProds={stockProducts} />
      <ProductTable products={ filteredProducts }  />
    </div>
  );
}

export default App;
