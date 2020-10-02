import React from 'react';

import './App.css';
import data from '../data.json'
import FilteredProductTable from './filteredProductTable/FilteredProductTable'


const App  = () => {
 



  

    return (
      <div>
        <FilteredProductTable products = {data}/>
      </div>
    );
  }

  
  

export default App;
