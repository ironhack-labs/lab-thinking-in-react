// App.js
import './App.css';
import React from 'react';
import ProductsPage from "./components/ProductsPage";

import { useState } from 'react';





function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
    
      <ProductsPage search={search}  setSearch={setSearch}/>
      
      
      
    </div>
  );
}

export default App;