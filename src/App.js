import React, {useState} from 'react';
import './App.css';
import articulos from './data.json'
import FilterableProductTable from './components/FilterableProductTable'

function App() {

  const [articulosTienda, setArticulosTienda] = useState(articulos.data)
  const [searchArticulos, setSearchArticulos] = useState(articulosTienda)

  return (
    <>
      <h1>IronStore</h1>
      <FilterableProductTable articulos={articulosTienda}
                               funcSetArt = {setArticulosTienda}
                               articulosABuscar = {searchArticulos}

                               />
    
    </>
  );
}

export default App;
