import React, { Component } from 'react'
import products from '../includes/data.json';
import FilterableProductTable from './pages/FilterableProductTable/FilterableProductTable'
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={ products.data } />
        <footer>
          <p>Dedicated to our TAs with love</p>
          <img src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4017/s300/logo-ironhack-blue.png" alt="Ironhack logo"/>
        </footer> 
      </div>
    )
  }
}
