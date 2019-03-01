import React from "react"
import FilterableProductTable from "./components/FilterableProductTable"
import data from "./data.json"
import './App.css';


function App(){
  return <FilterableProductTable {...data}/>
}

export default App