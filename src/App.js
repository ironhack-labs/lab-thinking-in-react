import React from "react"
import "./App.css"

import FilterableProductTable from "./components/FilterableProductTable"

import products from "./data.json"

function App() {
    return (
        <div className="App">
            <FilterableProductTable products={products.data} />
        </div>
    )
}

export default App
