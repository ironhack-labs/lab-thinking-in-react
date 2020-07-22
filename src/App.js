import React from 'react';
import data from './data.json'

import './App.css';

import FilterableProductTable from './Components/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={ data.data } />
      {/* envoie à product table les data sous forme de props , data.data car on recupère les data de l'objet data, pourrait être toto.data*/}
    </div>
  );
}

export default App;
