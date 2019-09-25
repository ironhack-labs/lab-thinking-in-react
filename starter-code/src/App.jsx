import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import data from "./data.json";
import FilterableProductTable from "./components/FilterableProductTable"
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';


export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      query:"", 
      // data
    }
    this.performSearch = this.performSearch.bind(this)
  }
  



  performSearch(value) {
    this.setState ({
      query:value
    })

  }
  
  render() {


    

    return (
      <div className="App">

        
      <SearchBar query={this.state.query} performSearch= {this.performSearch}/>
      <ProductTable data = {data} />

   

      </div>
      

    );
    
  }
}
