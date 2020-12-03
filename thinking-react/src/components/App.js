import './App.css'
import FilterableProd from './FilterableProductTable';
import data from './../data.json'

function App() {

  return (
    <>
      <h1>Estamos listos</h1>

      <FilterableProd products={data} />
    </>

  )
}

export default App;
