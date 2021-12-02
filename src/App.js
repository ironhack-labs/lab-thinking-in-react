import React, { useState } from 'react';
import './App.css';
import products from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  const [dataList, setdataList] = useState(products);
  return (
    <div className="App">
      <FilterableProductTable products={dataList.data} />
    </div>
  );
}

export default App;
