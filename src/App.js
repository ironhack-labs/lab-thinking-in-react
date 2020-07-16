import React, { useState } from 'react';
import './App.css';
import data from './data.json';

import FilterableProductTable from './components/FilterableProductTable';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <FilterableProductTable products={data} query={query} setQuery={setQuery}/>
      </header>
    </div>
  );
}

export default App;
