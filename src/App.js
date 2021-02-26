import React, {useState} from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import articulos from './data.json'

function App() {

  const [articulosTienda, setArticulosTienda] = useState(articulos.data)

  const[searchArticulos, setSearchArticulos] = useState(articulosTienda)
  return (
    <>
      <div>
        <h1>IronStore</h1>
      </div>
      <FilterableProductTable articulos={articulosTienda} 
        funcSetArt={setArticulosTienda} 
        articulosABuscar={searchArticulos}
      />
    </>
  );
}

export default App;
