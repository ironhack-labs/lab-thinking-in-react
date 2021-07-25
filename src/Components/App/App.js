//import React and stuff
import React from 'react';
//import Components
import Header from '../Header';
import ProductTable from '../ProductTable/ProductTable';
import Search from '../Search';
//import CSS
import './App.css'

function App() {
  return (
    <div>
    <Header title = "IronShop" />
    <Search />
    <ProductTable />
    </div>
  );
}

export default App;
