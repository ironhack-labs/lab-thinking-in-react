import React from 'react'
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable'

function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
        <FilterableProductTable products={data.data} />
      </div>
    </div>
  )
}

export default App
