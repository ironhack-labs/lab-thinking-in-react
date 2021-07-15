import React from 'react'
import jsondata from './data.json'
import './App.css'
import SearchBar from './SearchBar'
import Table from './ProductTable'


function App() {
  return (
    <div className="App">
      <SearchBar />
      <Table products={jsondata.data} />
    </div>
  )

}

export default App

