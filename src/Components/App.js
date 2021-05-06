import React from 'react'
import './App.css'

import FilterableProductTable from './FilterableProductTable'

import { data } from './../data.json'

const App = () => {

    return (
      <main>
        <h1>IronStore</h1>
        <FilterableProductTable products={ data } />
      </main>
    )
}

export default App