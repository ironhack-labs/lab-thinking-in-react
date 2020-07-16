import React, { useState, useEffect } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json'
import './App.css';

function App() {
  const { data: products } = data
  const [productsList, setProductsList] = useState(products)
  const [showProductsList, setShowProductsList] = useState([])
  const [findText, setFindText] = useState('')
  const [inStockChecked, setInStockChecked] = useState(false)


  useEffect(() => {
    setShowProductsList(productsList)
  }, [])

  useEffect(() => {
    findProductsByName()
    filterIsInStock()
  }, [findText, inStockChecked])

  const findProductsByName = () => {
    return setShowProductsList(productsList
      .filter(product => product.name
        .toLowerCase()
        .includes(findText.toLowerCase())
      ))
  }

  const filterIsInStock = () => {
    if (inStockChecked)
      return setShowProductsList(showProductsList
        .filter(product => product.stocked === inStockChecked))
  }

  return (
    <div className="App">
      <FilterableProductTable
        title="IronStore"
        products={showProductsList}
        handlerOnChange={(e) => setFindText(e.target.value)}
        handlerIsChecked={() => setInStockChecked(!inStockChecked)} />
    </div>
  );
}

export default App;