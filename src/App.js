import React from 'react';
import './App.css';
import jsonData from './data.json';

import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';

const App = () => {
  return (
    <div>    
      <FilterableProductTable 
        products={jsonData.data}
      />
    </div>
  );
};

export default App;
