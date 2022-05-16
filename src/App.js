import './App.css';
import ProductsPage from './components/ProductsPage'
import Data from './data.json'
import SearchBar from './components/SearchBar'
import { useState } from 'react'


function App() {
  const [productsData, setProductsData] = useState(Data)
  const filterProductData = (str) => {
    let filteredProducts;
    
    if (str === "") {
      filteredProducts = Data;
    } else {
      filteredProducts = productsData.filter((product) => {
        return product.name[0].toLowerCase() === str.toLowerCase();
      });
    }
   
    setProductsData(filteredProducts);
  };

  return (
    <div className="App">
    <SearchBar filter={filterProductData}/>
    <ProductsPage data={productsData} />
    </div>
  );
}

export default App;
