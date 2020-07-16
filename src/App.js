import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import { v4 as uuidv4 } from 'uuid';

import FilterableProductTable from './components/FilterableProductTable';

const App = () => {
  const [query, setQuery] = useState('');
  const [availability, setAvailability] = useState(false);

  const dataWithId = data.data.map((el) => ({ ...el, id: uuidv4() }));

  // console.log(dataWithId);

  return (
    <div className="App">
      <header className="App-header">
        <FilterableProductTable
          products={dataWithId}
          query={query}
          setQuery={setQuery}
          availability={availability}
          setAvailability={setAvailability}
        />
      </header>
    </div>
  );
};

export default App;
